<script setup lang="ts">
import { ref } from 'vue'
import DiagramBase from './DiagramBase.vue'

const hoveredLayer = ref<number | null>(null)

const layers = [
  { id: 4, name: 'Application', type: 'app', desc: 'Your code' },
  { id: 3, name: 'Dependencies', type: 'deps', desc: 'Libs & Binaries' },
  { id: 2, name: 'Guest OS (User Mode)', type: 'os', desc: 'The heavy OS tax' },
  { id: 1, name: 'Kernel (Guest)', type: 'kernel', desc: 'OS core' },
  { id: 0, name: 'Virtual Hardware', type: 'hw', desc: 'Hypervisor provided' },
]
</script>

<template>
  <DiagramBase title="طبقات Virtual Machine">
    <div class="stack-container">
      <div class="scene">
        <div 
          v-for="layer in layers" 
          :key="layer.id"
          class="layer-3d"
          :class="[layer.type, { 'is-hovered': hoveredLayer === layer.id, 'dimmed': hoveredLayer !== null && hoveredLayer !== layer.id }]"
          :style="{ transform: `translateZ(${hoveredLayer === layer.id ? layer.id * 40 + 30 : layer.id * 40}px)` }"
          @mouseenter="hoveredLayer = layer.id"
          @mouseleave="hoveredLayer = null"
        >
          <div class="layer-content">
            <span class="layer-name">{{ layer.name }}</span>
            <span v-if="hoveredLayer === layer.id" class="layer-desc fade-in">{{ layer.desc }}</span>
          </div>
        </div>
      </div>
      <div class="instruction">مرر مؤشر الماوس للتفاعل</div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.stack-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  perspective: 1000px;
}

.scene {
  position: relative;
  width: 250px;
  height: 250px;
  transform-style: preserve-3d;
  transform: rotateX(60deg) rotateZ(-45deg);
}

.layer-3d {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s, background-color 0.3s;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.layer-3d.dimmed {
  opacity: 0.3;
}

.layer-3d.is-hovered {
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1);
}

.layer-content {
  transform: rotateZ(45deg) rotateX(-60deg);
  text-align: center;
  pointer-events: none;
}

.layer-name {
  display: block;
  font-weight: 700;
  font-size: 1.1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
}

.layer-desc {
  display: block;
  font-size: 0.85rem;
  margin-top: 5px;
  color: rgba(255,255,255,0.8);
}

/* Layer Types */
.app { background: rgba(13, 183, 237, 0.8); } /* Docker blue */
.deps { background: rgba(50, 108, 229, 0.8); } /* K8s purple */
.os { background: rgba(248, 81, 73, 0.8); } /* Red warning */
.kernel { background: rgba(36, 150, 237, 0.8); }
.hw { background: rgba(110, 118, 129, 0.8); }

.instruction {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  opacity: 0.8;
}

.fade-in {
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
