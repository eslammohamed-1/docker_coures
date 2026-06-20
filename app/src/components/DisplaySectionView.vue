<script setup lang="ts">
import type { DisplaySection } from '../types/chapterDisplay'
import DisplayBlockView from './DisplayBlockView.vue'
import { getDiagramComponent } from '../data/diagramMap'
import { computed } from 'vue'

const props = defineProps<{ section: DisplaySection }>()

const diagramIds = computed(() => {
  if (props.section.diagramIds?.length) return props.section.diagramIds
  if (props.section.diagramId) return [props.section.diagramId]
  return []
})
</script>

<template>
  <section :id="section.id" class="display-section fade-up">
    <h3 class="section-heading">{{ section.heading }}</h3>
    <component :is="getDiagramComponent(id)" v-for="id in diagramIds" :key="id" />
    <DisplayBlockView v-for="(block, i) in section.blocks" :key="i" :block="block" />
  </section>
</template>

<style scoped>
.display-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  scroll-margin-top: 1.5rem;
}

.display-section:last-child {
  border-bottom: none;
}

.section-heading {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  color: var(--docker);
  padding-right: 0.75rem;
  border-right: 4px solid var(--docker);
}
</style>
