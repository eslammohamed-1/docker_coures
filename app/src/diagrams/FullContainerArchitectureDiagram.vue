<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="معمارية الـ Container الكاملة">
    <div class="arch">
      <div class="layer hw">Physical / Virtual Machine</div>
      <div class="layer os">Host Operating System</div>
      <div class="layer kernel">Host Kernel</div>
      <div class="features">
        <span>Namespaces</span>
        <span>cgroups</span>
      </div>
      <div class="layer runtime">Container Runtime — Docker / containerd / runc</div>
      <div class="containers">
        <div class="cbox">
          <strong>Container 1</strong>
          <span>Image Layers (read-only)</span>
          <span>Writable Layer</span>
          <span>App + Dependencies</span>
        </div>
        <div class="cbox">
          <strong>Container 2</strong>
          <span>Image Layers (read-only)</span>
          <span>Writable Layer</span>
          <span>App + Dependencies</span>
        </div>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.arch {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 520px;
  margin: 0 auto;
}

.layer {
  padding: 0.6rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  border: 2px solid var(--border);
  background: #21262d;
}

.layer.kernel {
  border-color: #2496ed;
  background: rgba(36, 150, 237, 0.12);
  color: #79c0ff;
}

.layer.runtime {
  border-color: #0db7ed;
  background: rgba(13, 183, 237, 0.1);
}

.features {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.features span {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(63, 185, 80, 0.1);
  border: 1px solid #3fb950;
  color: #aff5b4;
}

.containers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
}

.cbox {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.65rem;
  border-radius: 8px;
  border: 2px solid #3fb950;
  background: rgba(63, 185, 80, 0.08);
  font-size: 0.78rem;
}

.cbox strong {
  color: #7ee787;
  margin-bottom: 0.15rem;
}

.cbox span {
  padding: 0.3rem;
  border-radius: 4px;
  background: #21262d;
  text-align: center;
}

@media (max-width: 560px) {
  .containers {
    grid-template-columns: 1fr;
  }
}
</style>
