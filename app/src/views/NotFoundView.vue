<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container not-found fade-up">
    <h1>404</h1>
    <p>الشابتر أو الصفحة غير موجودة.</p>
    <RouterLink to="/">العودة للرئيسية</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 1rem;
}

.not-found h1 {
  font-size: 4rem;
  margin: 0;
  color: var(--docker);
}

.not-found p {
  color: var(--text-muted);
  margin: 1rem 0 1.5rem;
}
</style>
