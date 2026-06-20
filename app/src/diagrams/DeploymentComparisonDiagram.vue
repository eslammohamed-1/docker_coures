<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="قبل وبعد الـ Containers في الـ Deployment">
    <div class="compare">
      <div class="side before">
        <h4>Before Containers</h4>
        <div class="flow">
          <span>Install OS</span>
          <span class="arrow">↓</span>
          <span>Install Runtime</span>
          <span class="arrow">↓</span>
          <span>Install Dependencies</span>
          <span class="arrow">↓</span>
          <span>Configure Application</span>
          <span class="arrow">↓</span>
          <span>Run Application</span>
        </div>
      </div>
      <div class="side after">
        <h4>After Containers</h4>
        <div class="flow short">
          <span class="cmd">docker run app</span>
          <span class="arrow">↓</span>
          <span class="success">Running Application</span>
        </div>
      </div>
    </div>
    <p class="caption">الـ Containers تحوّل خطوات طويلة ومتكررة إلى أمر تشغيل موحّد.</p>
  </DiagramBase>
</template>

<style scoped>
.compare {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.side {
  padding: 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-card);
}

.side h4 {
  margin: 0 0 0.75rem;
  text-align: center;
  font-size: 0.95rem;
}

.before h4 {
  color: #ffa198;
}

.after h4 {
  color: #7ee787;
}

.flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.82rem;
  line-height: 1.5;
}

.flow span:not(.arrow):not(.cmd):not(.success) {
  padding: 0.4rem 0.65rem;
  border-radius: 6px;
  background: #21262d;
  border: 1px solid var(--border);
  width: 100%;
  text-align: center;
}

.arrow {
  color: #58a6ff;
  font-weight: 700;
}

.cmd {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: rgba(13, 183, 237, 0.15);
  border: 1px solid #0db7ed;
  font-family: ui-monospace, monospace;
  width: 100%;
  text-align: center;
}

.success {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: rgba(63, 185, 80, 0.15);
  border: 1px solid #3fb950;
  width: 100%;
  text-align: center;
  font-weight: 600;
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .compare {
    grid-template-columns: 1fr;
  }
}
</style>
