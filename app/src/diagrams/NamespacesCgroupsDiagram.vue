<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Namespaces و cgroups — أساس العزل والتحكم">
    <div class="root">
      <div class="container-node">Container Process Group</div>
      <div class="columns">
        <div class="col">
          <strong>Namespaces — Isolation</strong>
          <span>PID</span>
          <span>Network</span>
          <span>Mount</span>
          <span>UTS</span>
          <span>IPC</span>
          <span>User</span>
        </div>
        <div class="col cgroups">
          <strong>cgroups — Resource Control</strong>
          <span>CPU Limits</span>
          <span>Memory Limits</span>
          <span>I/O Limits</span>
          <span>Process Limits</span>
        </div>
      </div>
      <p class="formula">Namespaces → ماذا ترى العملية؟ · cgroups → كم مورد تستهلك؟</p>
    </div>
  </DiagramBase>
</template>

<style scoped>
.root {
  max-width: 520px;
  margin: 0 auto;
}

.container-node {
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  border: 2px solid #0db7ed;
  background: rgba(13, 183, 237, 0.12);
  color: #79c0ff;
  margin-bottom: 0.75rem;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-card);
}

.col strong {
  color: #79c0ff;
  font-size: 0.88rem;
  margin-bottom: 0.25rem;
}

.col span {
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  background: #21262d;
  font-size: 0.8rem;
  text-align: center;
}

.col.cgroups strong {
  color: #7ee787;
}

.formula {
  margin: 0.85rem 0 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 560px) {
  .columns {
    grid-template-columns: 1fr;
  }
}
</style>
