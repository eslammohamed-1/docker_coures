import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import type { ChapterDisplay, DisplayBlock, DisplayBlockType, DisplaySection, DiagramId } from '../src/types/chapterDisplay'
import { chapters } from '../src/data/chaptersManifest'
import { validateDisplay } from './display-validation'
import { CHAPTER_02_HANDBOOK } from './handbook/chapter-02'
import { CHAPTER_03_HANDBOOK } from './handbook/chapter-03'
import type { HandbookSection } from './handbook/types'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const COURSE_ROOT = join(ROOT, '..')

interface Segment {
  text: string
}

interface LeadBlock {
  type: DisplayBlockType
  content: string
}

interface SectionSpec {
  id: string
  heading: string
  start: number
  end: number
  diagramId?: DiagramId
  lead?: LeadBlock[]
}

const HANDBOOK_CATALOG: Record<number, HandbookSection[]> = {
  2: CHAPTER_02_HANDBOOK,
  3: CHAPTER_03_HANDBOOK,
}

const CATALOG: Record<number, SectionSpec[]> = {
  8: [
    {
      id: 'image-definition-and-build-time',
      heading: 'ما هي Docker Image؟',
      start: 0,
      end: 79,
      diagramId: 'ImageLayersDiagram',
      lead: [
        {
          type: 'definition',
          content: 'Docker Image\nPackage جاهز فيه application code وdependencies وfilesystem layers، لكنه لا يحتوي Kernel مستقل.',
        },
        {
          type: 'comparison',
          content: 'Build time | الأوامر والتغييرات التي تبني الـ Image\nRun time | ما يحدث عند إنشاء Container من الـ Image',
        },
      ],
    },
    {
      id: 'registry-repository-tags',
      heading: 'Registry وRepository وTags',
      start: 80,
      end: 159,
      diagramId: 'RegistryHierarchyDiagram',
      lead: [
        {
          type: 'definition',
          content: 'Image name\nيتكون غالباً من repo:tag، ولو الـ Image غير official نضيف account/repo:tag.',
        },
      ],
    },
    {
      id: 'official-vs-user-images',
      heading: 'Official Images مقابل User Images',
      start: 160,
      end: 239,
      lead: [
        {
          type: 'comparison',
          content: 'Official Image | تكتب python أو ubuntu مباشرة\nUser Image | تكتب account/repository مثل asami76/hadoop-sudo',
        },
        {
          type: 'warning',
          content: 'استخدام latest مريح للتجربة، لكنه مش دايماً أفضل اختيار في production لأنه يتحرك مع آخر tag.',
        },
      ],
    },
    {
      id: 'manifest-and-platform-selection',
      heading: 'Manifest List واختيار OS/Architecture',
      start: 240,
      end: 319,
      diagramId: 'ImageManifestDiagram',
      lead: [
        {
          type: 'flow',
          content: 'Docker client يطلب image\nRegistry يقرأ manifest list\nDocker يختار layers المناسبة للـ OS والـ architecture\nلو platform غير مدعوم، الـ container يفشل',
        },
      ],
    },
    {
      id: 'image-layers-and-pull',
      heading: 'Image Layers وتنزيلها',
      start: 320,
      end: 399,
      diagramId: 'ImageLayersDiagram',
      lead: [
        {
          type: 'definition',
          content: 'Layer\nفرق أو إضافة فوق layer سابقة. Docker يعيد استخدام الـ layers الموجودة محلياً بدل تنزيلها مرة أخرى.',
        },
      ],
    },
    {
      id: 'running-a-heavy-hadoop-image',
      heading: 'مثال عملي: تشغيل Hadoop Image',
      start: 400,
      end: 479,
      diagramId: 'DockerRunFlowDiagram',
      lead: [
        {
          type: 'command',
          content: 'docker container run -it --name hadoop-c -h hadoop asami76/hadoop-sudo:1.0 bash\nتشغيل container تفاعلي باسم وhostname محددين من Image غير official.',
        },
      ],
    },
    {
      id: 'inspect-container-and-image',
      heading: 'Inspect للـ Image والـ Container',
      start: 480,
      end: 567,
      lead: [
        {
          type: 'command',
          content: 'docker image inspect <image>\nيعرض metadata مثل tags وexposed ports وlayers والـ command الافتراضي.',
        },
        {
          type: 'command',
          content: 'docker container inspect <container>\nيعرض state وnetworking وruntime configuration الخاصة بالـ container.',
        },
      ],
    },
  ],
  9: [
    {
      id: 'vscode-docker-extension',
      heading: 'استخدام Docker Extension في VSCode',
      start: 0,
      end: 39,
      diagramId: 'VscodeDockerWorkflowDiagram',
      lead: [
        {
          type: 'definition',
          content: 'Docker Extension\nواجهة مرئية داخل VSCode لإدارة containers وimages وregistries بدل الاعتماد الكامل على terminal.',
        },
      ],
    },
    {
      id: 'vscode-run-and-manage',
      heading: 'تشغيل وإدارة Containers من الواجهة',
      start: 40,
      end: 79,
      diagramId: 'DockerRunFlowDiagram',
      lead: [
        {
          type: 'steps',
          content: 'اختيار image من Docker panel\nتشغيل container أو إيقافه\nفتح logs أو terminal\nمراجعة ports والـ status بصرياً',
        },
      ],
    },
    {
      id: 'vscode-inspect-search',
      heading: 'Inspect والبحث بدل زحمة الـ Terminal',
      start: 80,
      end: 138,
      lead: [
        {
          type: 'note',
          content: 'الميزة الأساسية هنا إن inspect output يصبح text file قابل للبحث والقراءة بدل JSON طويل داخل terminal.',
        },
      ],
    },
  ],
  10: [
    {
      id: 'container-is-image-instance',
      heading: 'Container كـ Instance من Image',
      start: 0,
      end: 39,
      diagramId: 'ContainerVsVmDiagram',
      lead: [
        {
          type: 'comparison',
          content: 'Image | Template أو Class مقفولة\nContainer | Instance أو Object شغال من الـ Image',
        },
      ],
    },
    {
      id: 'container-lifecycle',
      heading: 'Lifecycle: Create وStart وStop',
      start: 40,
      end: 79,
      diagramId: 'ContainerLifecycleDiagram',
      lead: [
        {
          type: 'flow',
          content: 'docker create يعمل container بدون تشغيل\ndocker start يشغل الـ process\ndocker run يختصر create + start\nexit أو انتهاء process يوقف الـ container',
        },
      ],
    },
    {
      id: 'signals-and-termination',
      heading: 'إيقاف Container والـ Signals',
      start: 80,
      end: 119,
      lead: [
        {
          type: 'warning',
          content: 'docker stop يرسل SIGTERM أولاً وينتظر، ثم SIGKILL لو الـ process لم يتوقف. لذلك لازم التطبيق يعرف يقفل نفسه cleanly.',
        },
      ],
    },
    {
      id: 'ports-env-and-runtime-config',
      heading: 'Ports وEnvironment Variables',
      start: 120,
      end: 159,
      lead: [
        {
          type: 'steps',
          content: 'اختيار image مناسبة\nتمرير environment variables وقت التشغيل\nعمل port mapping بين host وcontainer\nمراجعة logs عند الفشل',
        },
      ],
    },
    {
      id: 'sql-server-container-example',
      heading: 'مثال SQL Server Container',
      start: 160,
      end: 186,
      lead: [
        {
          type: 'note',
          content: 'المثال يوضح إن container runtime configuration مثل login وpassword والـ database connection أهم من مجرد image name.',
        },
      ],
    },
  ],
  12: [
    {
      id: 'container-storage-problem',
      heading: 'مشكلة التخزين داخل Containers',
      start: 0,
      end: 79,
      diagramId: 'DockerStorageDiagram',
      lead: [
        {
          type: 'definition',
          content: 'Immutable Container Pattern\nالـ image ثابتة والـ container layer مؤقتة، لذلك البيانات المهمة لازم تخرج إلى volume أو bind mount.',
        },
      ],
    },
    {
      id: 'writable-layer-demo',
      heading: 'Writable Layer عملياً',
      start: 80,
      end: 159,
      lead: [
        {
          type: 'warning',
          content: 'أي ملفات تكتبها داخل container فقط ستظل مرتبطة بالـ container نفسه، ولو اتمسح ستضيع معها.',
        },
      ],
    },
    {
      id: 'bind-mount-demo',
      heading: 'Bind Mount بين Host وContainer',
      start: 160,
      end: 239,
      diagramId: 'DockerStorageDiagram',
      lead: [
        {
          type: 'flow',
          content: 'اختيار folder من الـ host\nربطه بمسار داخل الـ container\nأي تعديل في host يظهر داخل container\nأي تعديل داخل container يظهر في host',
        },
      ],
    },
    {
      id: 'named-volumes-and-sharing',
      heading: 'Named Volumes ومشاركة البيانات',
      start: 240,
      end: 319,
      diagramId: 'DockerStorageDiagram',
      lead: [
        {
          type: 'definition',
          content: 'Named Volume\nStorage يديره Docker ويمكن ربطه بأكثر من container بحيث يقرأوا ويكتبوا نفس البيانات.',
        },
      ],
    },
    {
      id: 'commit-container-to-image',
      heading: 'تحويل Container إلى Image',
      start: 320,
      end: 363,
      lead: [
        {
          type: 'command',
          content: 'docker commit <container> <repo>:<tag>\nطريقة تحفظ تعديلات container داخل image جديدة، لكنها أقل تنظيماً من Dockerfile.',
        },
      ],
    },
  ],
  13: [
    {
      id: 'manual-commit-problem',
      heading: 'لماذا Docker Commit ليس أفضل طريقة؟',
      start: 0,
      end: 79,
      lead: [
        {
          type: 'comparison',
          content: 'Manual Commit | تعديلات يدوية صعبة التكرار والمراجعة\nDockerfile | تعليمات واضحة قابلة للتعديل والتشارك وإعادة البناء',
        },
      ],
    },
    {
      id: 'dockerfile-instructions',
      heading: 'Dockerfile كملف تعليمات',
      start: 80,
      end: 159,
      diagramId: 'DockerfileBuildDiagram',
      lead: [
        {
          type: 'flow',
          content: 'FROM يحدد base image\nWORKDIR يحدد مكان العمل\nCOPY ينقل الملفات\nRUN يثبت dependencies\nEXPOSE وCMD يضيفان metadata/runtime behavior',
        },
      ],
    },
    {
      id: 'docker-build-context',
      heading: 'Build Context وأمر docker build',
      start: 160,
      end: 239,
      diagramId: 'DockerfileBuildDiagram',
      lead: [
        {
          type: 'command',
          content: 'docker build -t account/app:1.0 .\nالنقطة في آخر الأمر هي build context الذي يبحث Docker داخله عن Dockerfile والملفات المطلوبة.',
        },
      ],
    },
    {
      id: 'rebuild-after-code-change',
      heading: 'تعديل الكود وإعادة بناء الـ Image',
      start: 240,
      end: 319,
      lead: [
        {
          type: 'steps',
          content: 'عدّل الملفات خارج الـ container\nشغّل docker build مرة أخرى\nشغّل container من الـ image الجديدة\nراجع النتيجة بدون دخول يدوي داخل container',
        },
      ],
    },
    {
      id: 'instruction-to-layer-map',
      heading: 'أي Instructions تصنع Layers؟',
      start: 320,
      end: 347,
      diagramId: 'DockerfileBuildDiagram',
      lead: [
        {
          type: 'comparison',
          content: 'FROM / COPY / RUN / WORKDIR عند إنشاء folder | تغييرات في filesystem وبالتالي layers\nEXPOSE / CMD | metadata تؤثر وقت تشغيل container',
        },
      ],
    },
  ],
}

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function cleanText(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

function makeTextBlocks(segments: Segment[], start: number, end: number, groupSize = 7): DisplayBlock[] {
  const blocks: DisplayBlock[] = []
  for (let i = start; i <= end; i += groupSize) {
    const groupEnd = Math.min(i + groupSize - 1, end)
    const content = cleanText(segments.slice(i, groupEnd + 1).map((seg) => seg.text).join(' '))
    if (!content) continue
    blocks.push({
      type: 'paragraph',
      content,
      sourceSegmentRange: [i, groupEnd],
    })
  }
  return blocks
}

function buildHandbookSection(spec: HandbookSection): DisplaySection {
  const blocks: DisplayBlock[] = spec.blocks.map((block, index) => ({
    type: block.type,
    content: block.content,
    sourceSegmentRange:
      index === spec.blocks.length - 1 ? [spec.start, spec.end] : [spec.start, Math.min(spec.start + 1, spec.end)],
  }))

  return {
    id: spec.id,
    heading: spec.heading,
    diagramId: spec.diagramId ?? spec.diagramIds?.[0],
    diagramIds: spec.diagramIds ?? (spec.diagramId ? [spec.diagramId] : undefined),
    blocks,
  }
}

function buildSection(spec: SectionSpec, segments: Segment[]): DisplaySection {
  const blocks: DisplayBlock[] = []

  for (const lead of spec.lead ?? []) {
    blocks.push({
      type: lead.type,
      content: lead.content,
      sourceSegmentRange: [spec.start, Math.min(spec.start + 1, spec.end)],
    })
  }

  blocks.push(...makeTextBlocks(segments, spec.start, spec.end))

  return {
    id: spec.id || toSlug(spec.heading),
    heading: spec.heading,
    diagramId: spec.diagramId,
    blocks,
  }
}

function ensureCoverage(sections: DisplaySection[], segmentCount: number): void {
  const covered = new Set<number>()
  for (const section of sections) {
    for (const block of section.blocks) {
      const range = block.sourceSegmentRange
      if (!range) continue
      for (let i = range[0]; i <= range[1]; i++) covered.add(i)
    }
  }

  const missing = []
  for (let i = 0; i < segmentCount; i++) {
    if (!covered.has(i)) missing.push(i)
  }

  if (missing.length) {
    throw new Error(`Missing segment coverage: ${missing.slice(0, 20).join(', ')}`)
  }
}

function generateChapter(chapterNumber: number): void {
  const chapter = chapters.find((c) => c.number === chapterNumber)
  if (!chapter) throw new Error(`Unknown chapter ${chapterNumber}`)

  const handbookSpecs = HANDBOOK_CATALOG[chapterNumber]
  const specs = CATALOG[chapterNumber]
  if (!handbookSpecs && !specs) throw new Error(`No curated catalog for chapter ${chapterNumber}`)

  const sourcePath = join(COURSE_ROOT, chapter.folderName, `${chapter.folderName}_Gemini_Corrected.json`)
  const outputDir = join(ROOT, 'public', 'chapters', chapter.folderName)
  const outputPath = join(outputDir, 'display.json')
  const data = JSON.parse(readFileSync(sourcePath, 'utf-8')) as { transcription: Segment[] }
  const segments = data.transcription ?? []

  const sectionSpecs = handbookSpecs ?? specs!
  for (const spec of sectionSpecs) {
    if (spec.end >= segments.length) {
      throw new Error(`${chapter.folderName}: section "${spec.heading}" ends at ${spec.end}, but chapter has ${segments.length} segments`)
    }
  }

  const sections = handbookSpecs
    ? handbookSpecs.map((spec) => buildHandbookSection(spec))
    : specs!.map((spec) => buildSection(spec, segments))
  ensureCoverage(sections, segments.length)

  const display: ChapterDisplay = {
    chapterNumber,
    title: chapter.title,
    folderName: chapter.folderName,
    formattedAt: new Date().toISOString(),
    model: handbookSpecs ? 'local-handbook-display' : 'local-curated-display',
    sections,
    metadata: {
      sourceSegmentCount: segments.length,
      blockCount: sections.reduce((sum, section) => sum + section.blocks.length, 0),
    },
  }

  const validation = validateDisplay(display)
  if (!validation.ok) {
    throw new Error(`${chapter.folderName}: ${validation.warnings.join('; ')}`)
  }

  mkdirSync(outputDir, { recursive: true })
  writeFileSync(outputPath, JSON.stringify(display, null, 2), 'utf-8')
  console.log(
    `Saved ${chapter.folderName}: ${display.sections.length} sections, ${display.metadata.blockCount} blocks, ${validation.coveredSegments}/${validation.segmentCount} segments`,
  )
}

function main(): void {
  const args = process.argv.slice(2)
  const catalogChapters = [...new Set([...Object.keys(HANDBOOK_CATALOG), ...Object.keys(CATALOG)])].map(Number)
  const targets = args.length ? args.map((arg) => parseInt(arg, 10)) : catalogChapters

  for (const chapterNumber of targets) {
    if (Number.isNaN(chapterNumber)) throw new Error(`Invalid chapter argument`)
    generateChapter(chapterNumber)
  }
}

main()
