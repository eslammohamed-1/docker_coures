<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const instructions = ['FROM', 'WORKDIR', 'COPY', 'RUN', 'EXPOSE', 'CMD']
</script>

<template>
  <DiagramBase title="Dockerfile Build Flow">
    <div class="build-flow">
      <div v-for="(step, index) in instructions" :key="step" class="step">
        <div class="num">{{ index + 1 }}</div>
        <strong>{{ step }}</strong>
        <span>{{ step === 'CMD' || step === 'EXPOSE' ? 'metadata' : 'layer / filesystem change' }}</span>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.build-flow {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.6rem;
}

.step {
  padding: 0.85rem;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid rgba(36, 150, 237, 0.35);
  text-align: center;
}

.num {
  width: 28px;
  height: 28px;
  margin: 0 auto 0.45rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(36, 150, 237, 0.18);
  color: #79c0ff;
  font-weight: 700;
}

strong {
  display: block;
  color: var(--docker);
}

span {
  display: block;
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .build-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
