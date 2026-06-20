<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { availableCount, chapters } from '../data/chaptersManifest'

const total = chapters.length
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="container header-inner">
        <RouterLink to="/" class="brand">
          <span class="brand-icon">🐳</span>
          <span>
            <strong>Docker & Kubernetes</strong>
            <small>العلبة دي فيها سوعبان</small>
          </span>
        </RouterLink>
        <div class="progress-pill">{{ availableCount }} / {{ total }} شابتر</div>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer container">
      <span>Docker & Kubernetes Course</span>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(13, 17, 23, 0.85);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 0;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text);
  text-decoration: none;
}

.brand:hover {
  text-decoration: none;
}

.brand-icon {
  font-size: 1.6rem;
}

.brand strong {
  display: block;
  font-size: 1rem;
}

.brand small {
  display: block;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.progress-pill {
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(36, 150, 237, 0.12);
  border: 1px solid rgba(36, 150, 237, 0.3);
  color: #79c0ff;
  font-size: 0.82rem;
  white-space: nowrap;
}

.main {
  flex: 1;
  padding: 1.5rem 0 2.5rem;
}

.footer {
  padding: 1rem 0 1.5rem;
  color: var(--text-muted);
  font-size: 0.78rem;
  border-top: 1px solid var(--border);
}
</style>
