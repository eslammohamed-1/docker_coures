<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const vms = ['VM 1', 'VM 2', 'VM 3', 'VM 4']
const costs = ['Guest OS', 'Updates', 'Patches', 'Licensing', 'Monitoring', 'Backup']
</script>

<template>
  <DiagramBase title="تكلفة تكرار الـ Guest OS مع تعدد الـ VMs">
    <div class="multi-vm">
      <div class="vm-grid">
        <div v-for="vm in vms" :key="vm" class="vm-card">
          <strong>{{ vm }}</strong>
          <span class="app">App</span>
          <span class="os">OS</span>
        </div>
      </div>
      <div class="costs">
        <p>Repeated Cost</p>
        <div class="cost-tags">
          <span v-for="cost in costs" :key="cost">{{ cost }}</span>
        </div>
      </div>
      <p class="caption">المشكلة ليست في VM واحدة، بل عندما يصبح العدد عشرات أو مئات.</p>
    </div>
  </DiagramBase>
</template>

<style scoped>
.multi-vm {
  max-width: 640px;
  margin: 0 auto;
}

.vm-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.65rem;
}

.vm-card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.65rem;
  border-radius: 8px;
  border: 1px solid rgba(248, 81, 73, 0.45);
  background: rgba(248, 81, 73, 0.1);
  text-align: center;
  font-size: 0.82rem;
}

.vm-card strong {
  color: #ffa198;
}

.vm-card .app {
  padding: 0.35rem;
  border-radius: 4px;
  background: rgba(63, 185, 80, 0.2);
  color: #aff5b4;
}

.vm-card .os {
  padding: 0.35rem;
  border-radius: 4px;
  background: rgba(248, 81, 73, 0.25);
  color: #ffd7d7;
}

.costs {
  margin-top: 1rem;
  padding: 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-card);
}

.costs p {
  margin: 0 0 0.65rem;
  font-weight: 700;
  color: #d29922;
}

.cost-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.cost-tags span {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: #21262d;
  border: 1px solid var(--border);
  font-size: 0.78rem;
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 640px) {
  .vm-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
