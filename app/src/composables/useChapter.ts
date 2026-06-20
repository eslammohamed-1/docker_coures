import { ref } from 'vue'
import type { ChapterDisplay } from '../types/chapterDisplay'

export function useChapter() {
  const formattedContent = ref<ChapterDisplay | null>(null)
  const needsFormatting = ref(false)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function load(folderName: string) {
    if (!folderName) return

    loading.value = true
    error.value = null
    needsFormatting.value = false
    formattedContent.value = null

    try {
      const displayRes = await fetch(`/chapters/${folderName}/display.json`)

      if (displayRes.ok) {
        formattedContent.value = (await displayRes.json()) as ChapterDisplay
      } else {
        needsFormatting.value = true
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'حدث خطأ أثناء تحميل المحتوى'
    } finally {
      loading.value = false
    }
  }

  return {
    formattedContent,
    needsFormatting,
    loading,
    error,
    load,
  }
}
