<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="الـ VMs والـ Containers معًا">
    <div class="nested">
      <div class="layer hardware">Physical Hardware</div>
      <div class="layer hypervisor">Hypervisor</div>
      <div class="vm-shell">
        <div class="layer host">Host OS</div>
        <div class="layer docker">Docker / Container Runtime</div>
        <div class="containers">
          <span>Container 1</span>
          <span>Container 2</span>
        </div>
        <p class="vm-label">Virtual Machine</p>
      </div>
    </div>
    <p class="caption">الـ VM يعطي عزلًا وبنية تحتية، والـ Containers تعطي سرعة وسهولة في تشغيل التطبيقات.</p>
  </DiagramBase>
</template>

<style scoped>
.nested {
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.layer {
  padding: 0.65rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 0.88rem;
  border: 2px solid;
}

.hardware {
  background: #30363d;
  border-color: #8b949e;
}

.hypervisor {
  background: rgba(210, 153, 34, 0.15);
  border-color: #d29922;
  color: #f0c14b;
}

.vm-shell {
  position: relative;
  padding: 0.85rem;
  border-radius: 8px;
  border: 2px dashed rgba(248, 81, 73, 0.5);
  background: rgba(248, 81, 73, 0.06);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.vm-label {
  position: absolute;
  top: -0.65rem;
  right: 0.75rem;
  margin: 0;
  padding: 0.15rem 0.5rem;
  font-size: 0.72rem;
  background: var(--bg-elevated);
  color: #ffa198;
  border-radius: 4px;
}

.host {
  background: rgba(36, 150, 237, 0.15);
  border-color: #2496ed;
  color: #79c0ff;
}

.docker {
  background: rgba(13, 183, 237, 0.15);
  border-color: #0db7ed;
  color: #79c0ff;
}

.containers {
  display: flex;
  gap: 0.5rem;
}

.containers span {
  flex: 1;
  padding: 0.55rem;
  border-radius: 6px;
  text-align: center;
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(63, 185, 80, 0.15);
  border: 1px solid #3fb950;
  color: #aff5b4;
}

.caption {
  margin: 0.85rem 0 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>
