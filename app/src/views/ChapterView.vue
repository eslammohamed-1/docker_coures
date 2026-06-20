<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { getChapterByNumber, getAdjacentChapter } from '../data/chaptersManifest'
import { useChapter } from '../composables/useChapter'
import ReadingTab from '../components/ReadingTab.vue'

const props = defineProps<{ number: string }>()
const router = useRouter()
const tocOpen = ref(false)

const chapterNumber = computed(() => parseInt(props.number, 10))
const chapter = computed(() => getChapterByNumber(chapterNumber.value))

const { formattedContent, needsFormatting, loading, error, load } = useChapter()

const prevChapter = computed(() => getAdjacentChapter(chapterNumber.value, 'prev'))
const nextChapter = computed(() => getAdjacentChapter(chapterNumber.value, 'next'))

const tocSections = computed(() => formattedContent.value?.sections ?? [])

function loadChapter() {
  if (!chapter.value) return
  load(chapter.value.folderName)
}

function scrollToSection(sectionId: string) {
  tocOpen.value = false
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${sectionId}`)
  }
}

onMounted(() => {
  if (!chapter.value) {
    router.replace({ name: 'not-found' })
    return
  }
  document.title = `${chapter.value.title} | Docker Course`
  loadChapter()
  localStorage.setItem('lastChapter', String(chapterNumber.value))
})

watch(
  () => props.number,
  () => {
    if (chapter.value) {
      document.title = `${chapter.value.title} | Docker Course`
      loadChapter()
      localStorage.setItem('lastChapter', String(chapterNumber.value))
    }
  },
)

function onKeydown(e: KeyboardEvent) {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
  if (e.key === 'ArrowLeft' && nextChapter.value) {
    router.push(`/chapter/${nextChapter.value.number}`)
  } else if (e.key === 'ArrowRight' && prevChapter.value) {
    router.push(`/chapter/${prevChapter.value.number}`)
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div v-if="!chapter" class="container" />
  <div v-else class="container chapter-view">
    <header class="chapter-header fade-up">
      <RouterLink to="/" class="back">← الرئيسية</RouterLink>
      <p class="chapter-num">الشابتر {{ String(chapter.number).padStart(2, '0') }}</p>
      <h1>{{ chapter.title }}</h1>
    </header>

    <div v-if="loading" class="loading">
      <div v-for="i in 4" :key="i" class="skeleton" style="height: 80px; margin-bottom: 1rem" />
    </div>

    <div v-else-if="error" class="error-box">{{ error }}</div>

    <template v-else>
      <div v-if="!chapter.isAvailable" class="coming-soon fade-up">
        <h2>قريباً</h2>
        <p>هذا الشابتر لم يُجهّز بعد.</p>
      </div>

      <template v-else>
        <div v-if="needsFormatting" class="format-notice fade-up">
          <h3>المحتوى قيد التجهيز</h3>
          <p>هذا الشابتر لسه ما اتنسّقش. شغّل <code>npm run format-chapter -- {{ chapter.number }}</code></p>
        </div>

        <div v-else-if="formattedContent" class="chapter-layout">
          <aside v-if="tocSections.length" class="toc-sidebar">
            <h2 class="toc-title">فهرس الأقسام</h2>
            <nav class="toc-nav">
              <button
                v-for="section in tocSections"
                :key="section.id"
                type="button"
                class="toc-link"
                @click="scrollToSection(section.id)"
              >
                {{ section.heading }}
              </button>
            </nav>
          </aside>

          <div class="chapter-main">
            <details v-if="tocSections.length" class="toc-mobile" :open="tocOpen">
              <summary @click.prevent="tocOpen = !tocOpen">فهرس الأقسام ({{ tocSections.length }})</summary>
              <nav class="toc-nav">
                <button
                  v-for="section in tocSections"
                  :key="section.id"
                  type="button"
                  class="toc-link"
                  @click="scrollToSection(section.id)"
                >
                  {{ section.heading }}
                </button>
              </nav>
            </details>

            <ReadingTab :content="formattedContent" />
          </div>
        </div>
      </template>
    </template>

    <nav class="chapter-nav fade-up">
      <RouterLink
        v-if="prevChapter"
        :to="`/chapter/${prevChapter.number}`"
        class="nav-btn"
      >
        → {{ prevChapter.title }}
      </RouterLink>
      <span v-else />
      <RouterLink
        v-if="nextChapter"
        :to="`/chapter/${nextChapter.number}`"
        class="nav-btn next"
      >
        {{ nextChapter.title }} ←
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.chapter-header {
  margin-bottom: 1.5rem;
}

.back {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.chapter-num {
  color: var(--docker);
  font-weight: 600;
  margin: 0.5rem 0 0.25rem;
  font-size: 0.9rem;
}

.chapter-header h1 {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.format-notice {
  padding: 1.5rem;
  background: rgba(210, 153, 34, 0.08);
  border: 1px solid rgba(210, 153, 34, 0.35);
  border-radius: var(--radius);
  margin-bottom: 1rem;
}

.format-notice h3 {
  margin: 0 0 0.5rem;
  color: #e3b341;
}

.format-notice p {
  margin: 0.35rem 0;
  color: var(--text-muted);
}

.coming-soon,
.error-box {
  padding: 2rem;
  text-align: center;
  background: var(--bg-elevated);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.error-box {
  color: #f85149;
}

.chapter-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.nav-btn {
  padding: 0.65rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-size: 0.88rem;
  max-width: 45%;
}

.nav-btn.next {
  margin-right: auto;
  text-align: left;
}

code {
  background: rgba(110, 118, 129, 0.2);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  font-size: 0.85em;
}

.chapter-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;
  align-items: start;
}

.chapter-main {
  min-width: 0;
}

.toc-sidebar {
  position: sticky;
  top: 1rem;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  padding: 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.toc-title {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc-link {
  display: block;
  width: 100%;
  text-align: right;
  padding: 0.45rem 0.5rem;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-family: inherit;
  font-size: 0.82rem;
  line-height: 1.35;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.toc-link:hover {
  background: rgba(36, 150, 237, 0.1);
  color: var(--docker);
}

.toc-mobile {
  display: none;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.toc-mobile summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--docker);
  list-style: none;
}

.toc-mobile summary::-webkit-details-marker {
  display: none;
}

.toc-mobile .toc-nav {
  margin-top: 0.75rem;
}

@media (max-width: 900px) {
  .chapter-layout {
    grid-template-columns: 1fr;
  }

  .toc-sidebar {
    display: none;
  }

  .toc-mobile {
    display: block;
  }
}
</style>
