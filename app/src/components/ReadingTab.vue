<script setup lang="ts">
import type { ChapterDisplay } from '../types/chapterDisplay'
import DisplaySectionView from './DisplaySectionView.vue'
import { computed, ref } from 'vue'

const props = defineProps<{ content: ChapterDisplay }>()
const query = ref('')

const filteredSections = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.content.sections
  return props.content.sections
    .map((section) => ({
      ...section,
      blocks: section.blocks.filter(
        (b) =>
          b.content.toLowerCase().includes(q) ||
          section.heading.toLowerCase().includes(q),
      ),
    }))
    .filter((s) => s.blocks.length > 0 || s.heading.toLowerCase().includes(q))
})
</script>

<template>
  <div class="reading-tab">
    <div class="meta-bar">
      <input v-model="query" type="search" placeholder="بحث في المحتوى..." class="search-input" />
    </div>
    <DisplaySectionView
      v-for="section in filteredSections"
      :key="section.id"
      :section="section"
    />
    <p v-if="filteredSections.length === 0" class="empty">لا توجد نتائج للبحث.</p>
  </div>
</template>

<style scoped>
.meta-bar {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  min-width: 200px;
  padding: 0.65rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text);
  font-family: inherit;
}

.empty {
  color: var(--text-muted);
  text-align: center;
  padding: 2rem;
}
</style>
