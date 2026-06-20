<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="الـ Container كـ Process Tree">
    <div class="tree">
      <div class="runc">runc / Low-level Runtime</div>
      <div class="arrow">↓</div>
      <div class="main">Main Container Process — PID 1 داخل الـ Container</div>
      <div class="children">
        <span>Child Process 1</span>
        <span>Child Process 2</span>
        <span>Child Process 3</span>
      </div>
      <div class="kernel-features">
        <span>Namespaces</span>
        <span>cgroups</span>
      </div>
    </div>
    <p class="caption">بالنسبة للـ Kernel دي Processes عادية، لكن معزولة ومحدودة الموارد.</p>
  </DiagramBase>
</template>

<style scoped>
.tree {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.runc,
.main {
  padding: 0.7rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.88rem;
}

.runc {
  border: 2px solid #d29922;
  background: rgba(210, 153, 34, 0.12);
  color: #f0c14b;
}

.main {
  border: 2px solid #0db7ed;
  background: rgba(13, 183, 237, 0.12);
  color: #79c0ff;
}

.arrow {
  margin: 0.25rem 0;
  color: #58a6ff;
  font-weight: 700;
}

.children {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0.5rem 0 0.75rem;
  padding-right: 1.5rem;
}

.children span {
  padding: 0.45rem;
  border-radius: 6px;
  background: #21262d;
  border: 1px solid var(--border);
  font-size: 0.82rem;
}

.kernel-features {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.kernel-features span {
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(63, 185, 80, 0.12);
  border: 1px solid #3fb950;
  color: #aff5b4;
}

.caption {
  margin: 0.85rem 0 0;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}
</style>
