<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const layers = [
  { name: 'Application', kind: 'useful' },
  { name: 'Dependencies', kind: 'useful' },
  { name: 'Guest OS', kind: 'overhead' },
  { name: 'Virtual Hardware', kind: 'overhead' },
]
</script>

<template>
  <DiagramBase title="طبقات الـ Virtual Machine">
    <div class="ch02-stack">
      <div
        v-for="layer in layers"
        :key="layer.name"
        class="ch02-layer"
        :class="layer.kind"
      >
        {{ layer.name }}
        <span class="badge">{{ layer.kind === 'useful' ? 'Workload' : 'Infrastructure' }}</span>
      </div>
    </div>
    <p class="ch02-caption">لتشغيل App داخل VM تحتاج Stack كامل وليس التطبيق وحده.</p>
  </DiagramBase>
</template>

<style scoped>
@import './ch02-shared.css';

.ch02-layer {
  justify-content: space-between;
  gap: 0.75rem;
}

.useful {
  background: rgba(63, 185, 80, 0.15);
  border-color: #3fb950;
  color: #aff5b4;
}

.overhead {
  background: rgba(248, 81, 73, 0.12);
  border-color: #f85149;
  color: #ffa198;
}

.badge {
  font-size: 0.72rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.25);
}
</style>
