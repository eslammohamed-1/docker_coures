<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Registry → Repository → Tags">
    <div class="registry">
      <div class="box registry-box">Docker Hub / Registry</div>
      <div class="repos">
        <div class="box repo">
          <strong>python</strong>
          <span>3.10</span>
          <span>3.11</span>
          <span>latest</span>
        </div>
        <div class="box repo">
          <strong>ubuntu</strong>
          <span>20.04</span>
          <span>22.04</span>
          <span>latest</span>
        </div>
        <div class="box repo">
          <strong>asami76/hadoop-sudo</strong>
          <span>1.0</span>
          <span>latest</span>
        </div>
      </div>
    </div>
  </DiagramBase>
</template>

<style scoped>
.registry {
  display: grid;
  gap: 1rem;
}

.box {
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--bg-card);
  border: 1px solid var(--border);
}

.registry-box {
  text-align: center;
  color: #79c0ff;
  font-weight: 700;
}

.repos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.repo {
  display: grid;
  gap: 0.45rem;
}

.repo strong {
  color: var(--docker);
}

.repo span {
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  background: rgba(36, 150, 237, 0.12);
  color: var(--text);
  font-size: 0.85rem;
}

@media (max-width: 760px) {
  .repos {
    grid-template-columns: 1fr;
  }
}
</style>
