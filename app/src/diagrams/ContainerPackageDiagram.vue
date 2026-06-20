<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const layers = ['Application', 'Dependencies', 'Configuration', 'Runtime Files']
</script>

<template>
  <DiagramBase title="الـ Container كـ Deployable Package">
    <div class="package">
      <div class="outer">
        <p class="outer-title">Container</p>
        <div class="inner-stack">
          <div v-for="layer in layers" :key="layer" class="inner-layer">{{ layer }}</div>
        </div>
      </div>
      <p class="caption">بدل إعادة خطوات التثبيت في كل بيئة، تشغّل Package جاهزة بنفس الطريقة.</p>
    </div>
  </DiagramBase>
</template>

<style scoped>
.package {
  max-width: 360px;
  margin: 0 auto;
}

.outer {
  padding: 1rem;
  border-radius: 12px;
  border: 3px solid #0db7ed;
  background: rgba(13, 183, 237, 0.08);
}

.outer-title {
  margin: 0 0 0.75rem;
  text-align: center;
  font-weight: 700;
  color: #79c0ff;
}

.inner-stack {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.inner-layer {
  padding: 0.65rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 0.88rem;
  background: #21262d;
  border: 1px solid var(--border);
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>
