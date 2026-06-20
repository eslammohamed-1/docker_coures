export interface TranscriptTimestamps {
  from: string
  to: string
}

export interface TranscriptOffsets {
  from: number
  to: number
}

export interface TranscriptSegment {
  timestamps: TranscriptTimestamps
  offsets: TranscriptOffsets
  text: string
}

export interface WhisperJson {
  transcription: TranscriptSegment[]
}
