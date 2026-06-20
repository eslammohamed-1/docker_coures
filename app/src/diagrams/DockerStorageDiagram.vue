<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Container Storage: Writable Layer vs Volume">
    <div class="storage">
      <div class="image">
        <h4>Image Layers</h4>
        <span>Read-only</span>
        <span>تتشارك بين containers</span>
      </div>
      <div class="container">
        <h4>Container</h4>
        <span>Writable Layer مؤقت</span>
        <span>يضيع لو container اتمسح</span>
      </div>
      <div class="volume">
        <h4>Volume / Bind Mount</h4>
        <span>Persistent Data</span>
        <span>ينفع يتشارك بين containers</span>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.storage {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.image,
.container,
.volume {
  padding: 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-card);
  min-height: 150px;
}

h4 {
  margin: 0 0 0.75rem;
  color: #79c0ff;
}

span {
  display: block;
  margin: 0.45rem 0;
  color: var(--text);
}

.image { border-color: rgba(36, 150, 237, 0.45); }
.container { border-color: rgba(210, 153, 34, 0.45); }
.volume { border-color: rgba(63, 185, 80, 0.45); }

@media (max-width: 760px) {
  .storage {
    grid-template-columns: 1fr;
  }
}
</style>
