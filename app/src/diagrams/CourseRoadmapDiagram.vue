<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="خريطة الكورس">
    <svg viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#2496ed" />
          <stop offset="100%" stop-color="#326ce5" />
        </linearGradient>
      </defs>
      <rect x="10" y="40" width="700" height="8" rx="4" fill="#30363d" />
      <rect x="10" y="40" width="700" height="8" rx="4" fill="url(#g1)" opacity="0.8" />
      <g font-family="Cairo,sans-serif" font-size="11" fill="#e6edf3" text-anchor="middle">
        <circle cx="40" cy="44" r="14" fill="#2496ed" /><text x="40" y="80">Containers</text>
        <circle cx="140" cy="44" r="14" fill="#2496ed" /><text x="140" y="80">Docker</text>
        <circle cx="260" cy="44" r="14" fill="#2496ed" /><text x="260" y="80">Images</text>
        <circle cx="380" cy="44" r="14" fill="#2496ed" /><text x="380" y="80">Network</text>
        <circle cx="500" cy="44" r="14" fill="#2496ed" /><text x="500" y="80">Compose</text>
        <circle cx="600" cy="44" r="14" fill="#326ce5" /><text x="600" y="80">K8s</text>
        <circle cx="680" cy="44" r="14" fill="#3fb950" /><text x="680" y="80">🐍</text>
      </g>
    </svg>
  </DiagramBase>
</template>
