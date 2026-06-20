<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="معمارية الـ Containers">
    <div class="ch02-stack">
      <div class="container-row">
        <div class="container-box">Container 1<br /><small>App + Deps</small></div>
        <div class="container-box">Container 2<br /><small>App + Deps</small></div>
        <div class="container-box">Container 3<br /><small>App + Deps</small></div>
      </div>
      <div class="ch02-layer runtime">Container Runtime — Docker / containerd</div>
      <div class="ch02-layer kernel">Host OS Kernel</div>
      <div class="ch02-layer host">Physical Server / Virtual Machine</div>
    </div>
    <p class="ch02-caption">الـ Container يحتوي التطبيق والـ dependencies، لكنه لا يحتاج Guest OS كاملًا.</p>
  </DiagramBase>
</template>

<style scoped>
@import './ch02-shared.css';

.container-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0.75rem;
  border-radius: 8px;
  border: 2px solid #3fb950;
  background: rgba(63, 185, 80, 0.08);
}

.container-box {
  padding: 0.65rem;
  border-radius: 6px;
  background: rgba(63, 185, 80, 0.18);
  border: 1px solid #3fb950;
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 1.45;
}

.container-box small {
  color: #8b949e;
  font-weight: 500;
}

.runtime {
  background: rgba(13, 183, 237, 0.15);
  border-color: #0db7ed;
  color: #79c0ff;
}

.kernel {
  background: rgba(36, 150, 237, 0.15);
  border-color: #2496ed;
  color: #79c0ff;
}

.host {
  background: #30363d;
  border-color: #8b949e;
}

@media (max-width: 640px) {
  .container-row {
    grid-template-columns: 1fr;
  }
}
</style>
