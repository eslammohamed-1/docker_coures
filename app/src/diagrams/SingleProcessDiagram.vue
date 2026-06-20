<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Container = Process واحدة">
    <svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="12">
        <rect x="30" y="40" width="360" height="90" rx="12" fill="#21262d" stroke="#3fb950" stroke-width="2" />
        <text x="210" y="65" text-anchor="middle" fill="#3fb950" font-weight="700">Container</text>
        <rect x="60" y="78" width="300" height="35" rx="6" fill="#1f3d2a" stroke="#3fb950" />
        <text x="210" y="100" text-anchor="middle" fill="#e6edf3">python process (PID)</text>
        <text x="210" y="130" text-anchor="middle" fill="#f85149" font-size="11">Process terminated → Container ends</text>
      </g>
    </svg>
  </DiagramBase>
</template>
