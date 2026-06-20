import { formatChapter, parseCliArgs } from './format-chapter'
import { chapters } from '../src/data/chaptersManifest'
import { execSync } from 'child_process'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function formatAllChapters() {
  const { force } = parseCliArgs()
  const available = chapters.filter((c) => c.isAvailable)
  const delaySec = parseInt(process.env.FORMAT_CHAPTER_DELAY_SEC || '15', 10)

  console.log(`Formatting ${available.length} available chapters...`)
  console.log(`Force: ${force}`)
  console.log(`Delay between chapters: ${delaySec}s\n`)

  let failed = 0

  for (const chapter of available) {
    try {
      await formatChapter(chapter.number, { force })
    } catch (err) {
      failed++
      console.error(`Failed chapter ${chapter.number}:`, err instanceof Error ? err.message : err)
    }
    console.log('')

    if (chapter.number !== available[available.length - 1]?.number) {
      console.log(`Waiting ${delaySec}s before next chapter...\n`)
      await sleep(delaySec * 1000)
    }
  }

  console.log('Running validation...\n')
  try {
    execSync('npx tsx scripts/validate-display.ts', { cwd: ROOT, stdio: 'inherit' })
  } catch {
    console.warn('Validation reported issues.')
  }

  if (failed > 0) {
    console.error(`${failed} chapter(s) failed.`)
    process.exit(1)
  }

  console.log('All chapters formatted successfully.')
}

formatAllChapters()
