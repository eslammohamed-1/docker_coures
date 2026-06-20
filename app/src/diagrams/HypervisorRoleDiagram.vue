<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const responsibilities = [
  'Create VM',
  'Start / Stop',
  'Allocate CPU/RAM',
  'Snapshot',
  'Backup / Restore',
  'Migration',
]
</script>

<template>
  <DiagramBase title="دور الـ Hypervisor">
    <div class="hypervisor-layout">
      <div class="vms">
        <div class="vm-pill">VM 1</div>
        <div class="vm-pill">VM 2</div>
        <div class="vm-pill">VM 3</div>
      </div>
      <div class="arrow">▼</div>
      <div class="hypervisor-box">
        <strong>Hypervisor</strong>
        <span>Resource Management · VM Lifecycle</span>
      </div>
      <div class="arrow">▼</div>
      <div class="hardware-box">Physical Hardware — CPU · RAM · Disk</div>
      <div class="responsibilities">
        <p>Hypervisor Responsibilities</p>
        <div class="tags">
          <span v-for="item in responsibilities" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.hypervisor-layout {
  max-width: 420px;
  margin: 0 auto;
  text-align: center;
}

.vms {
  display: flex;
  justify-content: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.vm-pill {
  padding: 0.55rem 0.9rem;
  border-radius: 8px;
  background: rgba(248, 81, 73, 0.15);
  border: 1px solid rgba(248, 81, 73, 0.45);
  font-weight: 600;
  font-size: 0.9rem;
}

.arrow {
  margin: 0.35rem 0;
  color: #58a6ff;
  font-size: 1.1rem;
}

.hypervisor-box,
.hardware-box {
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 2px solid;
}

.hypervisor-box {
  background: rgba(210, 153, 34, 0.15);
  border-color: #d29922;
}

.hypervisor-box strong {
  display: block;
  color: #f0c14b;
  margin-bottom: 0.25rem;
}

.hypervisor-box span {
  font-size: 0.82rem;
  color: #8b949e;
}

.hardware-box {
  background: #30363d;
  border-color: #8b949e;
  font-weight: 600;
}

.responsibilities {
  margin-top: 1rem;
  padding: 0.85rem;
  border-radius: 8px;
  background: rgba(36, 150, 237, 0.08);
  border: 1px solid rgba(36, 150, 237, 0.3);
}

.responsibilities p {
  margin: 0 0 0.65rem;
  font-weight: 700;
  color: #79c0ff;
  font-size: 0.9rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  justify-content: center;
}

.tags span {
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: #21262d;
  border: 1px solid var(--border);
  font-size: 0.78rem;
}
</style>
