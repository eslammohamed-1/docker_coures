import type { ChapterDisplay } from '../src/types/chapterDisplay'

export interface ValidationResult {
  ok: boolean
  chapterNumber: number
  folderName: string
  segmentCount: number
  blockCount: number
  coveredSegments: number
  missingIndices: number[]
  warnings: string[]
}

export function validateDisplay(display: ChapterDisplay, expectedSegmentCount?: number): ValidationResult {
  const segmentCount = expectedSegmentCount ?? display.metadata?.sourceSegmentCount ?? 0
  const blockCount = display.sections.reduce((n, s) => n + s.blocks.length, 0)
  const covered = new Set<number>()
  const warnings: string[] = []

  for (const section of display.sections) {
    for (const block of section.blocks) {
      const range = block.sourceSegmentRange
      if (!range || range.length !== 2) {
        warnings.push(`Block without valid sourceSegmentRange in section "${section.heading}"`)
        continue
      }
      const [start, end] = range
      for (let i = start; i <= end; i++) {
        covered.add(i)
      }
    }
  }

  const missingIndices: number[] = []
  for (let i = 0; i < segmentCount; i++) {
    if (!covered.has(i)) missingIndices.push(i)
  }

  if (segmentCount > 0 && blockCount / segmentCount < 0.05) {
    warnings.push(
      `Low block ratio (${blockCount}/${segmentCount} = ${(blockCount / segmentCount).toFixed(3)}) — possible over-summarization`,
    )
  }

  if (missingIndices.length > 0) {
    const preview = missingIndices.slice(0, 10).join(', ')
    warnings.push(
      `Missing ${missingIndices.length} segment(s): ${preview}${missingIndices.length > 10 ? '...' : ''}`,
    )
  }

  return {
    ok: missingIndices.length === 0 && warnings.filter((w) => w.startsWith('Missing')).length === 0,
    chapterNumber: display.chapterNumber,
    folderName: display.folderName,
    segmentCount,
    blockCount,
    coveredSegments: covered.size,
    missingIndices,
    warnings,
  }
}
