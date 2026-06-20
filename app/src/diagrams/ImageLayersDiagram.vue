<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Docker Image = طبقات فوق Kernel الـ Host">
    <div class="stack">
      <div class="layer app">Application Code</div>
      <div class="layer deps">Dependencies / Packages</div>
      <div class="layer runtime">Runtime / Tools</div>
      <div class="layer base">Base Image Files</div>
      <div class="host">Host Kernel (مش جوه الـ Image)</div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 0.5rem;
  max-width: 520px;
  margin: 0 auto;
}

.layer,
.host {
  padding: 0.85rem 1rem;
  border-radius: var(--radius);
  text-align: center;
  font-weight: 700;
  border: 1px solid var(--border);
}

.app { background: rgba(63, 185, 80, 0.18); border-color: rgba(63, 185, 80, 0.45); }
.deps { background: rgba(36, 150, 237, 0.16); border-color: rgba(36, 150, 237, 0.45); }
.runtime { background: rgba(188, 140, 255, 0.14); border-color: rgba(188, 140, 255, 0.4); }
.base { background: rgba(210, 153, 34, 0.14); border-color: rgba(210, 153, 34, 0.4); }
.host { background: rgba(248, 81, 73, 0.12); color: #ffa198; }
</style>
