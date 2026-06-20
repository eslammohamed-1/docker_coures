<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const layers = [
  'Application',
  'Dependencies',
  'Guest Operating System',
  'Virtual Hardware',
  'Hypervisor',
  'Physical Hardware',
]
</script>

<template>
  <DiagramBase title="VM Internal Stack — أين توجد المشكلة؟">
    <div class="stack">
      <div
        v-for="(layer, i) in layers"
        :key="layer"
        class="layer"
        :class="{ heavy: i === 2, app: i === 0 }"
      >
        {{ layer }}
      </div>
    </div>
    <p class="caption">التطبيق في أعلى الـ Stack، لكن تحته طبقات كثيرة — أهمها Guest OS الكامل.</p>
  </DiagramBase>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 420px;
  margin: 0 auto;
}

.layer {
  padding: 0.65rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 0.88rem;
  border: 2px solid var(--border);
  background: #21262d;
}

.layer.app {
  border-color: #3fb950;
  background: rgba(63, 185, 80, 0.15);
  color: #aff5b4;
}

.layer.heavy {
  border-color: #f85149;
  background: rgba(248, 81, 73, 0.15);
  color: #ffa198;
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>
