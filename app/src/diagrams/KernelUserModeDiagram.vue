<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Kernel Mode مقابل User Mode">
    <svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="12">
        <rect x="20" y="20" width="220" height="180" rx="10" fill="#21262d" stroke="#2496ed" />
        <text x="130" y="45" text-anchor="middle" fill="#79c0ff" font-weight="700">Kernel Mode</text>
        <text x="130" y="70" text-anchor="middle" fill="#e6edf3">Hardware detection</text>
        <text x="130" y="90" text-anchor="middle" fill="#e6edf3">CPU · RAM · Disk</text>
        <text x="130" y="120" text-anchor="middle" fill="#3fb950">✓ محتاجينه</text>

        <rect x="280" y="20" width="220" height="180" rx="10" fill="#21262d" stroke="#d29922" />
        <text x="390" y="45" text-anchor="middle" fill="#e3b341" font-weight="700">User Mode</text>
        <text x="390" y="70" text-anchor="middle" fill="#e6edf3">GUI · CLI · Services</text>
        <text x="390" y="100" text-anchor="middle" fill="#e6edf3">Desktop environment</text>
        <text x="390" y="130" text-anchor="middle" fill="#f85149">✗ مش محتاجينه</text>
        <text x="390" y="160" text-anchor="middle" fill="#8b949e" font-size="10">في كل Container</text>
      </g>
    </svg>
  </DiagramBase>
</template>
