<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Shared Kernel — فكرة الـ Containers">
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="11">
        <rect x="140" y="180" width="200" height="50" rx="8" fill="#1f3a5f" stroke="#2496ed" stroke-width="2" />
        <text x="240" y="210" text-anchor="middle" fill="#79c0ff" font-weight="700">Host Kernel (Shared)</text>

        <rect x="40" y="60" width="90" height="100" rx="6" fill="#1f3d2a" stroke="#3fb950" />
        <text x="85" y="85" text-anchor="middle" fill="#e6edf3">App</text>
        <text x="85" y="105" text-anchor="middle" fill="#8b949e" font-size="10">Container 1</text>
        <line x1="85" y1="160" x2="180" y2="180" stroke="#3fb950" stroke-width="2" />

        <rect x="195" y="60" width="90" height="100" rx="6" fill="#1f3d2a" stroke="#3fb950" />
        <text x="240" y="85" text-anchor="middle" fill="#e6edf3">App</text>
        <text x="240" y="105" text-anchor="middle" fill="#8b949e" font-size="10">Container 2</text>
        <line x1="240" y1="160" x2="240" y2="180" stroke="#3fb950" stroke-width="2" />

        <rect x="350" y="60" width="90" height="100" rx="6" fill="#1f3d2a" stroke="#3fb950" />
        <text x="395" y="85" text-anchor="middle" fill="#e6edf3">App</text>
        <text x="395" y="105" text-anchor="middle" fill="#8b949e" font-size="10">Container 3</text>
        <line x1="395" y1="160" x2="300" y2="180" stroke="#3fb950" stroke-width="2" />

        <text x="240" y="30" text-anchor="middle" fill="#3fb950" font-size="12">Kernel واحد · بدون Guest OS</text>
      </g>
    </svg>
  </DiagramBase>
</template>
