export type ChapterSection = 'docker' | 'kubernetes' | 'bonus'

export interface Chapter {
  number: number
  title: string
  folderName: string
  startTime: number
  endTime: number
  section: ChapterSection
  isAvailable: boolean
}

export function chapterDuration(chapter: Chapter): string {
  const mins = Math.round((chapter.endTime - chapter.startTime) / 60)
  if (mins < 1) return 'أقل من دقيقة'
  return `${mins} دقيقة`
}

export function chapterSectionLabel(section: ChapterSection): string {
  switch (section) {
    case 'docker':
      return 'Containers & Docker'
    case 'kubernetes':
      return 'Kubernetes'
    case 'bonus':
      return 'Bonus'
  }
}
