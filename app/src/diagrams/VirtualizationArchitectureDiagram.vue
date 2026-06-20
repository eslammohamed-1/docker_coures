<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="معمارية الـ Virtualization">
    <div class="ch02-stack">
      <div class="vm-row">
        <div class="vm">
          <span>VM 1</span>
          <small>Guest OS + App 1</small>
        </div>
        <div class="vm">
          <span>VM 2</span>
          <small>Guest OS + App 2</small>
        </div>
        <div class="vm">
          <span>VM 3</span>
          <small>Guest OS + App 3</small>
        </div>
      </div>
      <div class="ch02-layer hypervisor">Hypervisor</div>
      <div class="ch02-layer hardware">Physical Hardware — CPU · RAM · Disk · Network</div>
    </div>
    <p class="ch02-caption">الـ Hypervisor يقسم موارد السيرفر ويجعل كل VM تبدو كجهاز مستقل.</p>
  </DiagramBase>
</template>

<style scoped>
@import './ch02-shared.css';

.vm-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0.75rem;
  border-radius: 8px;
  border: 2px solid #d29922;
  background: rgba(210, 153, 34, 0.08);
}

.vm {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.65rem;
  border-radius: 6px;
  background: rgba(248, 81, 73, 0.15);
  border: 1px solid rgba(248, 81, 73, 0.45);
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
}

.vm small {
  color: #8b949e;
  font-weight: 500;
}

.hypervisor {
  background: rgba(210, 153, 34, 0.2);
  border-color: #d29922;
  color: #f0c14b;
}

.hardware {
  background: #30363d;
  border-color: #8b949e;
  color: #e6edf3;
}

@media (max-width: 640px) {
  .vm-row {
    grid-template-columns: 1fr;
  }
}
</style>
