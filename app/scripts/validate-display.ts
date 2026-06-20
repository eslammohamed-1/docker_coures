import { readFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import type { ChapterDisplay } from '../src/types/chapterDisplay'
import { chapters } from '../src/data/chaptersManifest'
import { validateDisplay } from './display-validation'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CHAPTERS_DIR = join(ROOT, 'public', 'chapters')

function validateChapterFolder(folderName: string, chapterNumber: number): boolean {
  const displayPath = join(CHAPTERS_DIR, folderName, 'display.json')
  if (!existsSync(displayPath)) {
    console.log(`Chapter ${chapterNumber}: SKIP (no display.json)`)
    return false
  }

  const display = JSON.parse(readFileSync(displayPath, 'utf-8')) as ChapterDisplay
  const result = validateDisplay(display)

  const status = result.ok ? 'OK' : 'WARN'
  console.log(
    `[${status}] Ch ${String(chapterNumber).padStart(2, '0')} ${folderName}: ${result.blockCount} blocks, ${result.coveredSegments}/${result.segmentCount} segments covered`,
  )
  for (const w of result.warnings) {
    console.log(`       ⚠ ${w}`)
  }

  return result.ok
}

function main() {
  const arg = process.argv[2]
  let ok = true

  if (arg) {
    const num = parseInt(arg, 10)
    const chapter = chapters.find((c) => c.number === num)
    if (!chapter) {
      console.error(`Chapter ${num} not found`)
      process.exit(1)
    }
    ok = validateChapterFolder(chapter.folderName, chapter.number)
  } else {
    const formatted = readdirSync(CHAPTERS_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)

    for (const chapter of chapters) {
      if (!formatted.includes(chapter.folderName)) continue
      if (!validateChapterFolder(chapter.folderName, chapter.number)) ok = false
    }
  }

  process.exit(ok ? 0 : 1)
}

main()
