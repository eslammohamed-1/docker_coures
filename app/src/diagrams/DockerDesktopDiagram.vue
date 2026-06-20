<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Docker Desktop على Windows / Mac">
    <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="11">
        <rect x="20" y="20" width="160" height="200" rx="10" fill="#21262d" stroke="#8b949e" />
        <text x="100" y="45" text-anchor="middle" fill="#e6edf3" font-weight="700">Windows / Mac</text>
        <text x="100" y="70" text-anchor="middle" fill="#79c0ff">Docker Desktop</text>
        <rect x="40" y="90" width="120" height="60" rx="6" fill="#1f3a5f" stroke="#2496ed" />
        <text x="100" y="115" text-anchor="middle" fill="#e6edf3">Linux VM</text>
        <text x="100" y="135" text-anchor="middle" fill="#8b949e" font-size="10">(Hyper-V / VM)</text>
        <rect x="50" y="165" width="45" height="35" rx="4" fill="#1f3d2a" stroke="#3fb950" />
        <rect x="105" y="165" width="45" height="35" rx="4" fill="#1f3d2a" stroke="#3fb950" />
        <text x="100" y="200" text-anchor="middle" fill="#3fb950" font-size="10">Linux Containers</text>

        <rect x="220" y="20" width="160" height="200" rx="10" fill="#21262d" stroke="#8b949e" />
        <text x="300" y="45" text-anchor="middle" fill="#e6edf3" font-weight="700">Windows Host</text>
        <rect x="240" y="80" width="120" height="45" rx="6" fill="#2d1f3d" stroke="#bc8cff" />
        <text x="300" y="108" text-anchor="middle" fill="#e6edf3">Windows Container</text>
        <text x="300" y="145" text-anchor="middle" fill="#8b949e" font-size="10">Windows Kernel</text>

        <rect x="400" y="20" width="140" height="200" rx="10" fill="#21262d" stroke="#2496ed" />
        <text x="470" y="45" text-anchor="middle" fill="#79c0ff" font-weight="700">Linux Native</text>
        <rect x="420" y="80" width="100" height="40" rx="6" fill="#1f3d2a" stroke="#3fb950" />
        <rect x="420" y="130" width="100" height="40" rx="6" fill="#1f3d2a" stroke="#3fb950" />
        <text x="470" y="195" text-anchor="middle" fill="#8b949e" font-size="10">Linux Kernel مباشرة</text>
      </g>
    </svg>
  </DiagramBase>
</template>
