<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Manifest List تختار الـ Image المناسبة">
    <div class="manifest">
      <div class="client">Docker Host<br /><span>OS + Architecture</span></div>
      <div class="arrow">→</div>
      <div class="list">
        <strong>Manifest List</strong>
        <span>linux/amd64</span>
        <span>linux/arm64</span>
        <span>windows/amd64</span>
      </div>
      <div class="arrow">→</div>
      <div class="layers">Matching Layers<br /><span>Download only needed stack</span></div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.manifest {
  display: grid;
  grid-template-columns: 1fr auto 1.2fr auto 1fr;
  gap: 0.75rem;
  align-items: center;
}

.client,
.list,
.layers {
  padding: 1rem;
  min-height: 120px;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
  text-align: center;
  display: grid;
  place-items: center;
  gap: 0.35rem;
}

.client,
.layers {
  color: #79c0ff;
  font-weight: 700;
}

.list strong {
  color: var(--docker);
}

.list span {
  display: block;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background: rgba(63, 185, 80, 0.1);
}

span {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.arrow {
  color: var(--docker);
  font-size: 1.5rem;
  font-weight: 700;
}

@media (max-width: 760px) {
  .manifest {
    grid-template-columns: 1fr;
  }
  .arrow {
    transform: rotate(90deg);
    text-align: center;
  }
}
</style>
