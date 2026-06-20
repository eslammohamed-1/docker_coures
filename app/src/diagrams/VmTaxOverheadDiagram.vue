<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="VM Tax — Useful Work مقابل Overhead">
    <div class="overhead">
      <div class="bar-row">
        <span class="label">Useful Work</span>
        <div class="bar useful">
          <div class="segment app">Application + Dependencies</div>
        </div>
        <span class="pct">~30%</span>
      </div>
      <div class="bar-row">
        <span class="label">Overhead</span>
        <div class="bar overhead">
          <div class="segment os">Guest OS + Services</div>
        </div>
        <span class="pct">~70%</span>
      </div>
      <div class="layers">
        <div class="layer useful-layer">Application</div>
        <div class="layer useful-layer">Dependencies</div>
        <div class="layer overhead-layer">Guest OS</div>
        <div class="layer overhead-layer">OS Background Services</div>
      </div>
      <p class="ch02-note">النسب تقريبية للتوضيح فقط. الفكرة أن Guest OS يضيف تكلفة إضافية لكل VM.</p>
    </div>
  </DiagramBase>
</template>

<style scoped>
.overhead {
  max-width: 520px;
  margin: 0 auto;
}

.bar-row {
  display: grid;
  grid-template-columns: 88px 1fr 48px;
  gap: 0.65rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.label,
.pct {
  font-size: 0.82rem;
  color: #8b949e;
}

.bar {
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.segment {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0 0.5rem;
  white-space: nowrap;
}

.bar.useful .segment {
  width: 30%;
  background: #3fb950;
  color: #0d1117;
}

.bar.overhead .segment {
  width: 70%;
  background: #f85149;
  color: #fff;
}

.layers {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 1rem;
}

.layer {
  padding: 0.65rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 0.88rem;
}

.useful-layer {
  background: rgba(63, 185, 80, 0.15);
  border: 1px solid #3fb950;
  color: #aff5b4;
}

.overhead-layer {
  background: rgba(248, 81, 73, 0.12);
  border: 1px solid #f85149;
  color: #ffa198;
}

.ch02-note {
  margin-top: 0.85rem;
  padding: 0.65rem 0.85rem;
  border-radius: 6px;
  background: rgba(210, 153, 34, 0.1);
  border: 1px solid rgba(210, 153, 34, 0.35);
  color: #e6edf3;
  font-size: 0.82rem;
  text-align: center;
  line-height: 1.55;
}
</style>
