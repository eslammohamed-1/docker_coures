import type { DiagramId } from '../../src/types/chapterDisplay'

export interface HandbookBlock {
  type:
    | 'summary'
    | 'definition'
    | 'note'
    | 'warning'
    | 'paragraph'
    | 'list'
    | 'flow'
    | 'steps'
    | 'command'
    | 'comparison'
    | 'table'
    | 'glossary'
    | 'questions'
    | 'takeaway'
  content: string
}

export interface HandbookSection {
  id: string
  heading: string
  start: number
  end: number
  diagramId?: DiagramId
  diagramIds?: DiagramId[]
  blocks: HandbookBlock[]
}
