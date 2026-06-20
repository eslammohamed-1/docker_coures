<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="النموذج التقليدي — Physical Server">
    <div class="ch02-stack">
      <div class="ch02-apps">
        <div class="ch02-app">App 1</div>
        <div class="ch02-app">App 2</div>
        <div class="ch02-app">App 3</div>
      </div>
      <div class="ch02-layer deps">Dependencies</div>
      <div class="ch02-layer os">Operating System — Windows / Linux / Unix</div>
      <div class="ch02-layer hw">
        Physical Hardware
        <span class="hw-detail">CPU · RAM · Disk · Network</span>
      </div>
    </div>
    <p class="ch02-caption">سيرفر فعلي واحد، نظام تشغيل واحد، وتطبيقات متعددة على نفس الـ Hardware.</p>
  </DiagramBase>
</template>

<style scoped>
@import './ch02-shared.css';

.deps {
  background: rgba(50, 108, 229, 0.2);
  border-color: #326ce5;
  color: #a5b4fc;
}

.os {
  background: rgba(36, 150, 237, 0.2);
  border-color: #2496ed;
  color: #79c0ff;
}

.hw {
  flex-direction: column;
  gap: 0.25rem;
  background: #30363d;
  border-color: #8b949e;
  color: #e6edf3;
}

.hw-detail {
  font-size: 0.8rem;
  color: #8b949e;
  font-weight: 500;
}
</style>
