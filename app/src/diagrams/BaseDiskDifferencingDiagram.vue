<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Base Disk و Differencing Disks">
    <div class="diagram">
      <div class="base">Base Disk / VM Template<br /><small>Full OS + Dependencies + App</small></div>
      <div class="branches">
        <div class="diff">Differencing Disk 1<br /><small>VM 1 Changes</small></div>
        <div class="diff">Differencing Disk 2<br /><small>VM 2 Changes</small></div>
        <div class="diff snapshot">Snapshot Layer<br /><small>More Changes</small></div>
      </div>
    </div>
    <p class="caption">نخزن الأساس مرة واحدة، ثم نخزن التغييرات فقط — نفس الفكرة وراء Container Layers.</p>
  </DiagramBase>
</template>

<style scoped>
.diagram {
  max-width: 520px;
  margin: 0 auto;
}

.base {
  padding: 0.85rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  border: 2px solid #d29922;
  background: rgba(210, 153, 34, 0.15);
  color: #f0c14b;
}

.base small {
  display: block;
  margin-top: 0.25rem;
  font-weight: 500;
  color: #8b949e;
  font-size: 0.78rem;
}

.branches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
  margin-top: 0.75rem;
  position: relative;
}

.branches::before {
  content: '';
  position: absolute;
  top: -0.5rem;
  left: 15%;
  right: 15%;
  height: 2px;
  background: #58a6ff;
}

.diff {
  padding: 0.65rem;
  border-radius: 6px;
  text-align: center;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid rgba(36, 150, 237, 0.45);
  background: rgba(36, 150, 237, 0.1);
}

.diff.snapshot {
  border-color: #3fb950;
  background: rgba(63, 185, 80, 0.1);
}

.diff small {
  display: block;
  margin-top: 0.2rem;
  color: #8b949e;
  font-weight: 500;
  font-size: 0.72rem;
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .branches {
    grid-template-columns: 1fr;
  }
}
</style>
