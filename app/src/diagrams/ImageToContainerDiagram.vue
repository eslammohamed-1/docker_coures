<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="من Image إلى Container">
    <div class="lifecycle">
      <div class="node image">
        <strong>Docker Image</strong>
        <span>Template / Blueprint</span>
      </div>
      <div class="arrow">docker run</div>
      <div class="node container">
        <strong>Container</strong>
        <span>Running Instance</span>
      </div>
      <div class="arrow">process start</div>
      <div class="node process">
        <strong>Application Process</strong>
        <span>Workload فعلي</span>
      </div>
    </div>
    <p class="caption">الـ Image قالب، والـ Container نسخة شغالة من القالب.</p>
  </DiagramBase>
</template>

<style scoped>
.lifecycle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  max-width: 320px;
  margin: 0 auto;
}

.node {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 2px solid;
  text-align: center;
}

.node strong {
  display: block;
  margin-bottom: 0.2rem;
}

.node span {
  font-size: 0.82rem;
  color: #8b949e;
}

.image {
  border-color: #d29922;
  background: rgba(210, 153, 34, 0.12);
}

.container {
  border-color: #0db7ed;
  background: rgba(13, 183, 237, 0.12);
}

.process {
  border-color: #3fb950;
  background: rgba(63, 185, 80, 0.12);
}

.arrow {
  color: #58a6ff;
  font-weight: 700;
  font-size: 0.85rem;
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
