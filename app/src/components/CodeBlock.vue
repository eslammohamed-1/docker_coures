<script setup lang="ts">
defineProps<{ code: string }>()
</script>

<template>
  <pre class="code-block"><code>{{ code }}</code></pre>
</template>

<style scoped>
.code-block {
  margin: 0.75rem 0;
  padding: 1rem 1.1rem;
  background: #0d1117;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow-x: auto;
  direction: ltr;
  text-align: left;
}

code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.88rem;
  color: #7ee787;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
