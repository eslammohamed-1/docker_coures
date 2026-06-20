<script setup lang="ts">
import { ref } from 'vue'
import DiagramBase from './DiagramBase.vue'

const sliderValue = ref(50)
</script>

<template>
  <DiagramBase title="مقارنة: Virtual Machine مقابل Container">
    <div class="comparison-container">
      <div class="side-vm">
        <h4 class="title vm-title">Virtual Machine</h4>
        <div class="stack">
          <div class="layer app">App A + App B</div>
          <div class="layer os guest-os">Full Guest OS</div>
          <div class="layer os kernel">Kernel</div>
        </div>
        <p class="desc">Multi-process · Multi-app</p>
      </div>

      <div class="side-container" :style="{ clipPath: `inset(0 0 0 ${sliderValue}%)` }">
        <h4 class="title container-title">Container</h4>
        <div class="stack">
          <div class="layer app container-app">Single App</div>
          <div class="layer deps">Dependencies only</div>
          <div class="layer os kernel shared-kernel">Shared Host Kernel</div>
        </div>
        <p class="desc">Single process · One purpose</p>
      </div>

      <input type="range" min="0" max="100" v-model="sliderValue" class="slider" />
      <div class="slider-line" :style="{ left: `${sliderValue}%` }">
        <div class="slider-handle">↔</div>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.comparison-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 250px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
}

.side-vm, .side-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}

.side-container {
  background: var(--bg-card); /* Matches the background so it overlays cleanly */
  /* clip-path inset is controlled by JS to reveal this layer */
  transition: clip-path 0.1s;
}

.title {
  margin: 0 0 1rem;
  font-weight: 700;
  font-size: 1.1rem;
}
.vm-title { color: #f85149; }
.container-title { color: #3fb950; }

.stack {
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 6px;
}

.layer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid;
}

.app {
  background: #30363d;
  border-color: #8b949e;
  color: #e6edf3;
}
.container-app {
  height: 50px;
  background: #1f3d2a;
  border-color: #3fb950;
}
.deps {
  background: #30363d;
  border-color: #8b949e;
  color: #e6edf3;
}

.os {
  background: #1f3a5f;
  border-color: #2496ed;
  color: #79c0ff;
}
.guest-os {
  background: #3d1f1f;
  border-color: #f85149;
  color: #ffa198;
}

.desc {
  margin-top: auto;
  font-size: 0.85rem;
  color: #8b949e;
}

/* Slider Controls */
.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ew-resize;
  z-index: 10;
}

.slider-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--docker);
  pointer-events: none;
  z-index: 5;
  transform: translateX(-50%);
}

.slider-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: var(--docker);
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>
