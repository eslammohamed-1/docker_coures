<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const steps = [
  { era: '1960s+', label: 'Physical Servers', detail: 'OS + Apps على Hardware واحد' },
  { era: '2000s+', label: 'Virtualization', detail: 'Hypervisor + VMs' },
  { era: 'Modern', label: 'Containers', detail: 'Shared Kernel + Cloud Native' },
]
</script>

<template>
  <DiagramBase title="تطور الفكرة: من السيرفرات إلى الـ Containers">
    <div class="timeline">
      <div v-for="(step, index) in steps" :key="step.label" class="step">
        <div class="era">{{ step.era }}</div>
        <div class="card">
          <strong>{{ step.label }}</strong>
          <span>{{ step.detail }}</span>
        </div>
        <div v-if="index < steps.length - 1" class="connector">→</div>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.timeline {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.era {
  font-size: 0.75rem;
  color: #8b949e;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 140px;
  padding: 0.85rem;
  border-radius: 8px;
  border: 2px solid var(--border);
  background: #21262d;
  text-align: center;
}

.card strong {
  color: #79c0ff;
}

.card span {
  font-size: 0.78rem;
  color: #8b949e;
  line-height: 1.45;
}

.connector {
  color: #58a6ff;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
