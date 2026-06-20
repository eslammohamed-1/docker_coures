<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { chapters } from '../data/chaptersManifest'
import { chapterSectionLabel, type ChapterSection } from '../types/chapter'
import ChapterCard from '../components/ChapterCard.vue'

const search = ref('')
const displayReady = ref<Record<number, boolean>>({})

const sections: ChapterSection[] = ['docker', 'kubernetes', 'bonus']

onMounted(async () => {
  const available = chapters.filter((c) => c.isAvailable)
  await Promise.all(
    available.map(async (c) => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}chapters/${c.folderName}/display.json`, { method: 'HEAD' })
        displayReady.value[c.number] = res.ok
      } catch {
        displayReady.value[c.number] = false
      }
    }),
  )
})

const formattedCount = computed(() =>
  Object.values(displayReady.value).filter(Boolean).length,
)

const lastChapterNumber = computed(() => {
  const raw = localStorage.getItem('lastChapter')
  if (!raw) return null
  const num = parseInt(raw, 10)
  const ch = chapters.find((c) => c.number === num)
  return ch?.isAvailable && displayReady.value[num] ? ch : null
})

const filteredBySection = computed(() => {
  const q = search.value.trim().toLowerCase()
  const result: Record<ChapterSection, typeof chapters> = {
    docker: [],
    kubernetes: [],
    bonus: [],
  }
  for (const chapter of chapters) {
    if (q && !chapter.title.toLowerCase().includes(q) && !String(chapter.number).includes(q)) {
      continue
    }
    result[chapter.section].push(chapter)
  }
  return result
})

const progressPercent = computed(() =>
  Math.round((formattedCount.value / chapters.length) * 100),
)
</script>

<template>
  <div class="container home">
    <RouterLink
      v-if="lastChapterNumber"
      :to="`/chapter/${lastChapterNumber.number}`"
      class="continue-banner fade-up"
    >
      <span class="continue-label">كمل القراءة</span>
      <span class="continue-title">
        الشابتر {{ String(lastChapterNumber.number).padStart(2, '0') }} — {{ lastChapterNumber.title }}
      </span>
      <span class="continue-arrow">←</span>
    </RouterLink>

    <section class="hero fade-up">
      <p class="eyebrow">Docker & Kubernetes Course</p>
      <h1>العلبة دي فيها سوعبان 🐳☸️</h1>
      <p class="subtitle">
        محتوى الكورس منسّق بواسطة Gemini — كل شابتر بأقسام، فقرات، أكواد، ودايجرامات.
      </p>
      <div class="progress-wrap">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progressPercent}%` }" />
        </div>
        <span>{{ formattedCount }} / {{ chapters.length }} شابتر جاهز للعرض</span>
      </div>
    </section>

    <div class="search-wrap fade-up">
      <input
        v-model="search"
        type="search"
        placeholder="بحث في الشابترات..."
        class="search-input"
      />
    </div>

    <section v-for="section in sections" :key="section" class="section-block fade-up">
      <h2 class="section-title">{{ chapterSectionLabel(section) }}</h2>
      <div class="grid">
        <ChapterCard
          v-for="chapter in filteredBySection[section]"
          :key="chapter.number"
          :chapter="chapter"
          :has-display="!!displayReady[chapter.number]"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.continue-banner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  background: linear-gradient(135deg, rgba(36, 150, 237, 0.12), rgba(50, 108, 229, 0.08));
  border: 1px solid rgba(36, 150, 237, 0.35);
  border-radius: var(--radius);
  color: var(--text);
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.continue-banner:hover {
  border-color: var(--docker);
  transform: translateY(-1px);
}

.continue-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--docker);
  white-space: nowrap;
}

.continue-title {
  flex: 1;
  font-size: 0.9rem;
}

.continue-arrow {
  color: var(--docker);
  font-size: 1.1rem;
}

.hero {
  text-align: center;
  padding: 2rem 1rem 1rem;
}

.eyebrow {
  color: var(--docker);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0 0 0.5rem;
}

.hero h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
}

.subtitle {
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 1.25rem;
}

.progress-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.progress-bar {
  width: min(320px, 100%);
  height: 8px;
  background: var(--bg-elevated);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--docker), var(--k8s));
  border-radius: 999px;
  transition: width 0.5s ease;
}

.search-wrap {
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
}

.section-block {
  margin-bottom: 1rem;
}

.section-title {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  color: #79c0ff;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
</style>
