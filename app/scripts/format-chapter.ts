import { config } from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import type { ChapterDisplay, DisplaySection } from '../src/types/chapterDisplay'
import { DIAGRAM_IDS } from '../src/types/chapterDisplay'
import { chapters } from '../src/data/chaptersManifest'
import { validateDisplay } from './display-validation'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const COURSE_ROOT = join(ROOT, '..')

config({ path: join(ROOT, '.env') })

const DEFAULT_MODEL = 'gemini-3.1-pro-preview'
const DEFAULT_FALLBACK_MODEL = 'gemini-3.1-pro-preview-customtools'
const DEFAULT_FREE_TIER_MODELS = ['gemini-2.5-flash', 'gemini-3-flash-preview', 'gemini-3.5-flash']
const DEFAULT_CHUNK_SIZE = 80

interface WhisperSegment {
  text: string
  timestamps?: { from: string; to: string }
}

interface FormatOptions {
  force?: boolean
}

interface ChapterSources {
  jsonPath: string
  txtPath: string
  sourceLabel: string
}

function resolveChapterSources(folderName: string, sourceDir: string): ChapterSources {
  const correctedJson = join(sourceDir, `${folderName}_Gemini_Corrected.json`)
  const rawJson = join(sourceDir, `${folderName}.wav.json`)
  const wavTxt = join(sourceDir, `${folderName}.wav.txt`)
  const plainTxt = join(sourceDir, `${folderName}.txt`)

  const jsonPath = existsSync(correctedJson) ? correctedJson : rawJson
  const txtPath = existsSync(wavTxt) ? wavTxt : plainTxt

  const sourceLabel = jsonPath === correctedJson ? 'corrected JSON' : 'whisper JSON'
  return { jsonPath, txtPath, sourceLabel }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getChunkSize(): number {
  const n = parseInt(process.env.FORMAT_CHUNK_SIZE || String(DEFAULT_CHUNK_SIZE), 10)
  return Number.isNaN(n) || n < 20 ? DEFAULT_CHUNK_SIZE : n
}

function isRateLimitError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const e = err as { status?: number; message?: string }
  return e.status === 429 || (e.message?.includes('429') ?? false) || (e.message?.includes('quota') ?? false)
}

function isQuotaExhaustedError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err)
  return /limit:\s*0/i.test(message) || /free_tier.*limit:\s*0/i.test(message)
}

function parseRetryDelayMs(err: unknown): number {
  const message = err instanceof Error ? err.message : String(err)
  const match = message.match(/retry in ([\d.]+)s/i)
  if (match) return Math.ceil(parseFloat(match[1]) * 1000) + 500
  return 8000
}

function getModelNames(): string[] {
  const models: string[] = []
  const add = (name?: string) => {
    const trimmed = name?.trim()
    if (trimmed && !models.includes(trimmed)) models.push(trimmed)
  }

  const freeTierOnly = process.env.GEMINI_USE_FREE_TIER_ONLY === 'true'

  if (!freeTierOnly) {
    add(process.env.GEMINI_MODEL || DEFAULT_MODEL)
    add(process.env.GEMINI_MODEL_FALLBACK || DEFAULT_FALLBACK_MODEL)
  } else {
    console.log('  ℹ GEMINI_USE_FREE_TIER_ONLY=true — skipping Pro models')
  }

  const freeTier = process.env.GEMINI_MODEL_FREE_TIER?.split(',').map((m) => m.trim()) ?? DEFAULT_FREE_TIER_MODELS
  for (const model of freeTier) add(model)

  return models
}

async function generateWithModels(
  genAI: GoogleGenerativeAI,
  modelNames: string[],
  prompt: string,
): Promise<{ text: string; modelUsed: string }> {
  let lastError: unknown
  const maxRetriesPerModel = 2

  for (const modelName of modelNames) {
    for (let attempt = 0; attempt <= maxRetriesPerModel; attempt++) {
      try {
        if (attempt > 0) {
          console.log(`  ↻ Retry ${attempt}/${maxRetriesPerModel} for ${modelName}`)
        } else {
          console.log(`  → Trying model: ${modelName}`)
        }

        const model = genAI.getGenerativeModel({
          model: modelName,
          generationConfig: { responseMimeType: 'application/json' },
        })
        const result = await model.generateContent(prompt)
        const text = result.response.text()
        if (!text?.trim()) throw new Error('Empty response from model')
        return { text, modelUsed: modelName }
      } catch (err) {
        lastError = err
        const msg = err instanceof Error ? err.message.split('\n')[0] : String(err)
        console.warn(`  ✗ ${modelName} failed:`, msg)

        if (isQuotaExhaustedError(err)) {
          console.log(`  ⚠ ${modelName} غير متاح على خطتك — انتقل للموديل التالي`)
          break
        }

        if (isRateLimitError(err) && attempt < maxRetriesPerModel) {
          const delay = parseRetryDelayMs(err)
          console.log(`  ⏳ Rate limit — waiting ${Math.round(delay / 1000)}s...`)
          await sleep(delay)
          continue
        }
        break
      }
    }
  }

  throw lastError ?? new Error('All Gemini models failed')
}

const DIAGRAM_RULES = `
قواعد diagramId (اختياري — section واحد فقط إذا يناسب المحتوى):
- CourseRoadmapDiagram: خريطة الكورس
- VmEvolutionDiagram: Physical Server → VM
- VmLayersDiagram: طبقات VM
- KernelUserModeDiagram: Kernel vs User Mode
- SharedKernelDiagram: Shared Kernel
- DockerDesktopDiagram: Docker Desktop Win/Mac
- ClientServerDiagram: docker client/daemon
- ContainerVsVmDiagram: VM vs Container
- SingleProcessDiagram: container = process واحدة
- DockerRunFlowDiagram: docker run = pull+create+start
- DockerEngineDiagram: CLI → dockerd → containerd → runc
لا تضع diagramId إلا إذا الشرح في هذا القسم يطابق المفهوم بالضبط.`

function buildSinglePrompt(
  chapterNumber: number,
  title: string,
  folderName: string,
  segmentCount: number,
  jsonContent: string,
  txtContent: string,
): string {
  return `أنت محرر محتوى تقني. استلم تفريغ Whisper لشرح Docker/Kubernetes.

المطلوب بصرامة:
1. لا تحذف أي معلومة — كل segment في المصدر يجب أن يظهر في block واحد على الأقل
2. نظّم المحتوى في sections بعناوين عربية/إنجليزية واضحة
3. صحّح الإملاء والنحو مع الحفاظ على اللهجة المصرية التقنية
4. المصطلحات التقنية والأكواد بالإنجليزية (Docker, containerd, runc, Kubernetes...)
5. استخدم type: "code" للأوامر مثل docker run, docker info
6. استخدم type: "list" للنقاط المتعددة (content = نص مع \\n بين العناصر)
7. استخدم type: "note" للملاحظات المهمة
8. كل block يجب sourceSegmentRange: [startIndex, endIndex] بفهارس transcription الأصلية (0-based)
9. غطّ كل الفهارس من 0 إلى ${segmentCount - 1} بدون فجوات
10. لا تلخّص — انقل كل الأفكار بأسلوب منسّق
${DIAGRAM_RULES}

diagramIds المتاحة: ${DIAGRAM_IDS.join(', ')}

بيانات الشابتر:
- chapterNumber: ${chapterNumber}
- title: ${title}
- folderName: ${folderName}

أعد JSON بالهيكل:
{
  "sections": [
    {
      "id": string,
      "heading": string,
      "diagramId": string | null,
      "blocks": [
        {
          "type": "paragraph" | "code" | "list" | "note" | "heading",
          "content": string,
          "sourceSegmentRange": [number, number]
        }
      ]
    }
  ]
}

Whisper JSON:
${jsonContent}

Whisper TXT:
${txtContent}`
}

function buildChunkPrompt(
  chapterNumber: number,
  title: string,
  chunkIndex: number,
  totalChunks: number,
  globalStart: number,
  globalEnd: number,
  segmentsJson: string,
): string {
  return `أنت محرر محتوى تقني. هذا **الجزء ${chunkIndex + 1} من ${totalChunks}** من شابتر "${title}" (#${chapterNumber}).

نطاق segments في هذا الجزء: ${globalStart} إلى ${globalEnd} (فهارس transcription الأصلية).

المطلوب بصرامة:
1. لا تحذف أي segment في النطاق ${globalStart}–${globalEnd} — كل segment = block واحد على الأقل أو ضمن range يغطيه
2. sourceSegmentRange يستخدم الفهارس **العالمية** الأصلية (ليس 0-based داخل الجزء)
3. صحّح الإملاء مع الحفاظ على اللهجة المصرية التقنية
4. type: "code" للأوامر، type: "list" للنقاط
5. لا تلخّص — انقل كل الأفكار
${DIAGRAM_RULES}

أعد JSON فقط:
{
  "sections": [
    {
      "id": string,
      "heading": string,
      "diagramId": string | null,
      "blocks": [
        {
          "type": "paragraph" | "code" | "list" | "note" | "heading",
          "content": string,
          "sourceSegmentRange": [number, number]
        }
      ]
    }
  ]
}

Segments (JSON):
${segmentsJson}`
}

function cleanSections(sections: DisplaySection[]): DisplaySection[] {
  return sections.map((section, si) => {
    const s = { ...section, blocks: [...section.blocks] }
    if (s.diagramId === null || s.diagramId === '' || s.diagramId === undefined) {
      delete s.diagramId
    }
    if (!s.id) s.id = `section-${si + 1}`
    return s
  })
}

function countBlocks(sections: DisplaySection[]): number {
  return sections.reduce((sum, section) => sum + section.blocks.length, 0)
}

function buildLocalSections(title: string, segments: WhisperSegment[], chunkSize: number): DisplaySection[] {
  const sections: DisplaySection[] = []
  const sectionSize = Math.max(20, chunkSize)

  for (let start = 0; start < segments.length; start += sectionSize) {
    const end = Math.min(start + sectionSize, segments.length) - 1
    const blocks = segments.slice(start, end + 1).map((seg, i) => ({
      type: 'paragraph' as const,
      content: seg.text?.trim() || '...',
      sourceSegmentRange: [start + i, start + i] as [number, number],
    }))

    sections.push({
      id: `local-section-${sections.length + 1}`,
      heading: `${title} - جزء ${sections.length + 1}`,
      blocks,
    })
  }

  return sections
}

function chunkSegments(segments: WhisperSegment[], chunkSize: number): WhisperSegment[][] {
  const chunks: WhisperSegment[][] = []
  for (let i = 0; i < segments.length; i += chunkSize) {
    chunks.push(segments.slice(i, i + chunkSize))
  }
  return chunks
}

function segmentsToChunkJson(segments: WhisperSegment[], globalOffset: number): string {
  const annotated = segments.map((seg, i) => ({
    globalIndex: globalOffset + i,
    text: seg.text?.trim(),
    timestamps: seg.timestamps,
  }))
  return JSON.stringify(annotated, null, 2)
}

async function formatSingle(
  genAI: GoogleGenerativeAI,
  modelNames: string[],
  chapterNumber: number,
  title: string,
  folderName: string,
  jsonContent: string,
  txtContent: string,
  segmentCount: number,
): Promise<{ sections: DisplaySection[]; modelUsed: string }> {
  const prompt = buildSinglePrompt(chapterNumber, title, folderName, segmentCount, jsonContent, txtContent)
  const { text, modelUsed } = await generateWithModels(genAI, modelNames, prompt)
  const parsed = JSON.parse(text) as { sections: DisplaySection[] }
  return { sections: cleanSections(parsed.sections ?? []), modelUsed }
}

async function formatChunked(
  genAI: GoogleGenerativeAI,
  modelNames: string[],
  chapterNumber: number,
  title: string,
  segments: WhisperSegment[],
  chunkSize: number,
): Promise<{ sections: DisplaySection[]; modelUsed: string }> {
  const chunks = chunkSegments(segments, chunkSize)
  const allSections: DisplaySection[] = []
  let modelUsed = ''

  console.log(`  Chunked: ${chunks.length} chunks × ~${chunkSize} segments`)

  for (let ci = 0; ci < chunks.length; ci++) {
    const globalStart = ci * chunkSize
    const globalEnd = Math.min(globalStart + chunks[ci].length - 1, segments.length - 1)
    const segmentsJson = segmentsToChunkJson(chunks[ci], globalStart)

    console.log(`  Chunk ${ci + 1}/${chunks.length} (segments ${globalStart}–${globalEnd})...`)

    const prompt = buildChunkPrompt(
      chapterNumber,
      title,
      ci,
      chunks.length,
      globalStart,
      globalEnd,
      segmentsJson,
    )

    const { text, modelUsed: used } = await generateWithModels(genAI, modelNames, prompt)
    modelUsed = used

    const parsed = JSON.parse(text) as { sections: DisplaySection[] }
    const sections = cleanSections(parsed.sections ?? []).map((s, si) => ({
      ...s,
      id: `chunk-${ci}-${s.id || `section-${si + 1}`}`,
    }))
    allSections.push(...sections)

    if (ci < chunks.length - 1) {
      const delay = parseInt(process.env.FORMAT_CHUNK_DELAY_SEC || '5', 10) * 1000
      await sleep(delay)
    }
  }

  return { sections: allSections, modelUsed }
}

export async function formatChapter(chapterNumber: number, options: FormatOptions = {}): Promise<void> {
  const chapter = chapters.find((c) => c.number === chapterNumber)
  if (!chapter) throw new Error(`Chapter ${chapterNumber} not found in manifest`)

  const sourceDir = join(COURSE_ROOT, chapter.folderName)
  const { jsonPath, txtPath, sourceLabel } = resolveChapterSources(chapter.folderName, sourceDir)
  const outputDir = join(ROOT, 'public', 'chapters', chapter.folderName)
  const outputPath = join(outputDir, 'display.json')

  if (!options.force && existsSync(outputPath)) {
    console.log(`Chapter ${chapterNumber}: SKIP (display.json exists, use --force to overwrite)`)
    return
  }

  if (!existsSync(jsonPath) || !existsSync(txtPath)) {
    throw new Error(
      `Source files missing for chapter ${chapterNumber} (${chapter.folderName}): need JSON + txt`,
    )
  }

  const jsonContent = readFileSync(jsonPath, 'utf-8')
  const txtContent = readFileSync(txtPath, 'utf-8')
  const whisper = JSON.parse(jsonContent) as { transcription: WhisperSegment[] }
  const segments = whisper.transcription ?? []
  const segmentCount = segments.length
  const chunkSize = getChunkSize()
  const useGemini = process.env.FORMAT_USE_GEMINI === 'true' || sourceLabel !== 'corrected JSON'

  console.log(`Formatting chapter ${chapterNumber}: ${chapter.title} (${segmentCount} segments)...`)
  console.log(`  Source: ${sourceLabel}`)

  let sections: DisplaySection[]
  let modelUsed = 'local-corrected-json'

  if (!useGemini) {
    console.log('  Mode: local display build (no Gemini/API call)')
    sections = buildLocalSections(chapter.title, segments, chunkSize)
  } else {
    const apiKey = process.env.GEMINI_API_KEY?.trim().replace(/^['"]|['"]$/g, '')
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY فارغ في app/.env')
    }

    const modelNames = getModelNames()
    console.log(`  Models: ${modelNames.join(' → ')}`)

    const genAI = new GoogleGenerativeAI(apiKey)

    if (segmentCount > chunkSize) {
      ;({ sections, modelUsed } = await formatChunked(
        genAI,
        modelNames,
        chapterNumber,
        chapter.title,
        segments,
        chunkSize,
      ))
    } else {
      ;({ sections, modelUsed } = await formatSingle(
        genAI,
        modelNames,
        chapterNumber,
        chapter.title,
        chapter.folderName,
        jsonContent,
        txtContent,
        segmentCount,
      ))
    }
  }

  const display: ChapterDisplay = {
    chapterNumber,
    title: chapter.title,
    folderName: chapter.folderName,
    formattedAt: new Date().toISOString(),
    model: modelUsed,
    sections,
    metadata: {
      sourceSegmentCount: segmentCount,
      blockCount: countBlocks(sections),
    },
  }

  const validation = validateDisplay(display)
  if (!validation.ok) {
    console.warn(`  ⚠ Validation warnings for chapter ${chapterNumber}:`)
    for (const w of validation.warnings) console.warn(`     ${w}`)
  }

  mkdirSync(outputDir, { recursive: true })
  writeFileSync(outputPath, JSON.stringify(display, null, 2), 'utf-8')
  console.log(
    `Saved ${outputPath} (${display.metadata.blockCount} blocks, ${validation.coveredSegments}/${segmentCount} segments) via ${modelUsed}`,
  )
}

function parseCliArgs(): { chapterNumber?: number; force: boolean } {
  const args = process.argv.slice(2)
  let force = false
  let chapterNumber: number | undefined

  for (const arg of args) {
    if (arg === '--force' || arg === '-f') force = true
    else {
      const num = parseInt(arg, 10)
      if (!Number.isNaN(num)) chapterNumber = num
    }
  }

  return { chapterNumber, force }
}

const { chapterNumber, force } = parseCliArgs()
if (chapterNumber !== undefined) {
  formatChapter(chapterNumber, { force }).catch((err) => {
    console.error(err)
    process.exit(1)
  })
}

export { parseCliArgs }
