<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'

const servers = [
  { title: 'Web Server', os: 'Linux' },
  { title: 'Database Server', os: 'Linux' },
  { title: 'App Server', os: 'Windows' },
]
</script>

<template>
  <DiagramBase title="مشكلة التوسع قبل الـ Virtualization">
    <div class="scaling">
      <div class="servers">
        <div v-for="server in servers" :key="server.title" class="server-box">
          <strong>{{ server.title }}</strong>
          <span>Physical Box</span>
          <span class="os">{{ server.os }}</span>
        </div>
      </div>
      <div class="problems">
        <p class="problems-title">Problem</p>
        <ul>
          <li>Cost</li>
          <li>Space &amp; Power</li>
          <li>Maintenance</li>
          <li>Low utilization</li>
        </ul>
      </div>
      <p class="ch02-caption">كل خدمة جديدة كانت تعني شراء سيرفر فعلي منفصل.</p>
    </div>
  </DiagramBase>
</template>

<style scoped>
.scaling {
  max-width: 640px;
  margin: 0 auto;
}

.servers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.server-box {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.85rem;
  border-radius: 8px;
  border: 2px solid #8b949e;
  background: #21262d;
  text-align: center;
  font-size: 0.85rem;
}

.server-box strong {
  color: #79c0ff;
}

.server-box .os {
  color: #d29922;
  font-weight: 600;
}

.problems {
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(248, 81, 73, 0.4);
  background: rgba(248, 81, 73, 0.1);
}

.problems-title {
  margin: 0 0 0.5rem;
  font-weight: 700;
  color: #ffa198;
}

.problems ul {
  margin: 0;
  padding-right: 1.2rem;
  line-height: 1.7;
  color: #e6edf3;
}

.ch02-caption {
  margin: 0.85rem 0 0;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-align: center;
}

@media (max-width: 640px) {
  .servers {
    grid-template-columns: 1fr;
  }
}
</style>
