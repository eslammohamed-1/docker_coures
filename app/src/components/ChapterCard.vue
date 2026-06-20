<script setup lang="ts">
import type { Chapter } from '../types/chapter'
import { chapterDuration } from '../types/chapter'
import { RouterLink } from 'vue-router'

defineProps<{
  chapter: Chapter
  hasDisplay: boolean
}>()
</script>

<template>
  <RouterLink
    :to="chapter.isAvailable ? `/chapter/${chapter.number}` : '#'"
    class="chapter-card fade-up"
    :class="{ disabled: !chapter.isAvailable }"
    @click="!chapter.isAvailable && $event.preventDefault()"
  >
    <div class="card-top">
      <span class="number">{{ String(chapter.number).padStart(2, '0') }}</span>
      <span v-if="chapter.isAvailable && hasDisplay" class="badge badge-ready">جاهز</span>
      <span v-else-if="chapter.isAvailable" class="badge badge-format">يحتاج تنسيق</span>
      <span v-else class="badge badge-soon">قريباً</span>
    </div>
    <h3 class="title">{{ chapter.title }}</h3>
    <p class="meta">{{ chapterDuration(chapter) }}</p>
  </RouterLink>
</template>

<style scoped>
.chapter-card {
  display: block;
  padding: 1.1rem 1.2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.chapter-card:hover:not(.disabled) {
  transform: translateY(-3px);
  border-color: rgba(36, 150, 237, 0.5);
  box-shadow: var(--shadow);
  text-decoration: none;
}

.chapter-card.disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
}

.number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--docker);
  opacity: 0.85;
}

.title {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  line-height: 1.4;
}

.meta {
  margin: 0;
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>
