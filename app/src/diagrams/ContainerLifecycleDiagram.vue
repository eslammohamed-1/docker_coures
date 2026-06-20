<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Container Lifecycle">
    <div class="lifecycle">
      <div class="state">Image</div>
      <div class="arrow">docker create / run</div>
      <div class="state">Created</div>
      <div class="arrow">start</div>
      <div class="state running">Running Process</div>
      <div class="arrow">stop / kill</div>
      <div class="state stopped">Exited</div>
      <div class="arrow">rm</div>
      <div class="state removed">Removed</div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.lifecycle {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, auto));
  gap: 0.45rem;
  align-items: center;
}

.state,
.arrow {
  padding: 0.75rem;
  border-radius: var(--radius);
  text-align: center;
}

.state {
  background: var(--bg-card);
  border: 1px solid rgba(36, 150, 237, 0.4);
  font-weight: 700;
}

.running { border-color: rgba(63, 185, 80, 0.6); color: #7ee787; }
.stopped { border-color: rgba(210, 153, 34, 0.6); color: #e3b341; }
.removed { border-color: rgba(248, 81, 73, 0.6); color: #ffa198; }

.arrow {
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .lifecycle {
    grid-template-columns: 1fr;
  }
}
</style>
