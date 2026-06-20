<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Docker in VSCode Workflow">
    <div class="workflow">
      <div class="panel">
        <strong>Docker Extension</strong>
        <span>Images</span>
        <span>Containers</span>
        <span>Registries</span>
      </div>
      <div class="panel">
        <strong>Actions</strong>
        <span>Run</span>
        <span>Inspect</span>
        <span>Logs / Terminal</span>
      </div>
      <div class="panel">
        <strong>Result</strong>
        <span>أقل Terminal noise</span>
        <span>بحث وفلترة أسهل</span>
        <span>إدارة مرئية</span>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.workflow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.panel {
  padding: 1rem;
  border-radius: var(--radius);
  border: 1px solid rgba(36, 150, 237, 0.35);
  background: var(--bg-card);
}

strong {
  display: block;
  margin-bottom: 0.75rem;
  color: #79c0ff;
}

span {
  display: block;
  margin: 0.45rem 0;
  padding: 0.45rem 0.6rem;
  border-radius: 8px;
  background: rgba(36, 150, 237, 0.1);
}

@media (max-width: 760px) {
  .workflow {
    grid-template-columns: 1fr;
  }
}
</style>
