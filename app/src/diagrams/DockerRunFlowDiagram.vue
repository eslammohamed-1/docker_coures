<script setup lang="ts">
import { ref } from 'vue'
import DiagramBase from './DiagramBase.vue'

const activeStep = ref(-1)
let timeout: any = null

function simulateRun() {
  clearTimeout(timeout)
  activeStep.value = 0
  
  const nextStep = () => {
    if (activeStep.value < 4) {
      activeStep.value++
      timeout = setTimeout(nextStep, 1000)
    }
  }
  
  timeout = setTimeout(nextStep, 1000)
}
</script>

<template>
  <DiagramBase title="تدفق docker run — Pull ثم Create ثم Start">
    <div class="flow-container">
      <button class="run-btn" @click="simulateRun">
        <i class="fa-solid fa-play"></i> Execute: docker run ubuntu
      </button>

      <div class="flow-steps">
        <!-- Step 1: Pull -->
        <div class="step" :class="{ active: activeStep >= 1 }">
          <div class="circle"><i class="fa-solid fa-cloud-arrow-down"></i></div>
          <span class="label">1. Pull Image</span>
          <span class="sub-label">(If not local)</span>
          <div class="connector" :class="{ filled: activeStep >= 2 }"></div>
        </div>

        <!-- Step 2: Create -->
        <div class="step" :class="{ active: activeStep >= 2 }">
          <div class="circle"><i class="fa-solid fa-box"></i></div>
          <span class="label">2. Create</span>
          <span class="sub-label">Allocate resources</span>
          <div class="connector" :class="{ filled: activeStep >= 3 }"></div>
        </div>

        <!-- Step 3: Start -->
        <div class="step" :class="{ active: activeStep >= 3 }">
          <div class="circle"><i class="fa-solid fa-power-off"></i></div>
          <span class="label">3. Start</span>
          <span class="sub-label">Run process</span>
          <div class="connector" :class="{ filled: activeStep >= 4 }"></div>
        </div>

        <!-- Final: Running -->
        <div class="step final" :class="{ active: activeStep >= 4 }">
          <div class="circle"><i class="fa-brands fa-docker"></i></div>
          <span class="label">Running</span>
          <span class="sub-label">Container alive</span>
        </div>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.flow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.run-btn {
  background: var(--docker);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: transform 0.1s, background 0.2s;
}

.run-btn:hover {
  background: #0ba5d6;
  transform: scale(1.05);
}

.run-btn:active {
  transform: scale(0.95);
}

.flow-steps {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 120px;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.step.active {
  opacity: 1;
}

.circle {
  width: 60px;
  height: 60px;
  background: var(--bg-elevated);
  border: 2px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text-muted);
  z-index: 2;
  transition: all 0.3s;
}

.step.active .circle {
  border-color: var(--docker);
  color: var(--docker);
  box-shadow: 0 0 15px rgba(13, 183, 237, 0.4);
}

.step.final.active .circle {
  border-color: #3fb950;
  color: #3fb950;
  box-shadow: 0 0 15px rgba(63, 185, 80, 0.4);
}

.label {
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

.sub-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: center;
}

.connector {
  position: absolute;
  top: 30px;
  left: 50%;
  width: 100%;
  height: 4px;
  background: var(--border);
  z-index: 1;
}

.connector.filled {
  background: var(--docker);
  box-shadow: 0 0 10px rgba(13, 183, 237, 0.4);
  animation: fillLine 0.5s forwards;
}

@keyframes fillLine {
  from { width: 0; }
  to { width: 100%; }
}
</style>
