<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const resources = [
  { label: 'CPU', used: 30 },
  { label: 'RAM', used: 20 },
  { label: 'Disk', used: 15 },
  { label: 'Network', used: 10 },
]
</script>

<template>
  <DiagramBase title="إهدار الموارد — سيرفر قوي وتطبيق واحد">
    <div class="utilization">
      <p class="lead">Physical Server Resources</p>
      <div v-for="item in resources" :key="item.label" class="row">
        <span class="label">{{ item.label }}</span>
        <div class="bar-track">
          <div class="bar-fill" :style="{ width: `${item.used}%` }" />
        </div>
        <span class="value">{{ item.used }}% Used</span>
      </div>
      <p class="ch02-note">الأرقام للتوضيح فقط، وليست قياسات ثابتة.</p>
    </div>
  </DiagramBase>
</template>

<style scoped>
.utilization {
  max-width: 520px;
  margin: 0 auto;
}

.lead {
  margin: 0 0 1rem;
  font-weight: 700;
  color: #79c0ff;
  text-align: center;
}

.row {
  display: grid;
  grid-template-columns: 72px 1fr 88px;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.label,
.value {
  font-size: 0.85rem;
  color: #e6edf3;
}

.value {
  color: #8b949e;
  font-size: 0.78rem;
}

.bar-track {
  height: 18px;
  border-radius: 999px;
  background: #30363d;
  overflow: hidden;
  border: 1px solid var(--border);
}

.bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3fb950, #58a6ff);
}
</style>
