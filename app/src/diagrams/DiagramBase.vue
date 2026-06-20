<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <figure class="diagram">
    <figcaption>{{ title }}</figcaption>
    <div class="diagram-body">
      <slot />
    </div>
  </figure>
</template>

<style scoped>
.diagram {
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  overflow-x: auto;
}

figcaption {
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #79c0ff;
  font-size: 0.95rem;
}

.diagram-body {
  min-width: 280px;
}

.diagram-body :deep(svg) {
  width: 100%;
  height: auto;
  display: block;
}
</style>
