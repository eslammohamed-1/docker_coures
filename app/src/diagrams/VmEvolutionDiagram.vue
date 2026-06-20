<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="تطور البنية: Physical Server → Virtual Machine">
    <svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="12" fill="#e6edf3">
        <rect x="20" y="30" width="120" height="140" rx="8" fill="#21262d" stroke="#8b949e" />
        <text x="80" y="55" text-anchor="middle" font-weight="700">1960s</text>
        <text x="80" y="80" text-anchor="middle">Physical</text>
        <text x="80" y="98" text-anchor="middle">Server</text>
        <text x="80" y="130" text-anchor="middle" fill="#8b949e" font-size="10">OS + Apps</text>

        <path d="M150 100 H190" stroke="#2496ed" stroke-width="2" marker-end="url(#arrow)" />
        <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2496ed"/></marker></defs>

        <rect x="200" y="30" width="120" height="140" rx="8" fill="#21262d" stroke="#d29922" />
        <text x="260" y="55" text-anchor="middle" font-weight="700">Hypervisor</text>
        <rect x="215" y="70" width="90" height="35" rx="4" fill="#3d1f1f" stroke="#f85149" opacity="0.9" />
        <rect x="215" y="112" width="90" height="35" rx="4" fill="#3d1f1f" stroke="#f85149" opacity="0.7" />
        <text x="260" y="165" text-anchor="middle" fill="#8b949e" font-size="10">VM + VM + VM</text>

        <path d="M330 100 H370" stroke="#2496ed" stroke-width="2" marker-end="url(#arrow)" />

        <rect x="380" y="30" width="120" height="140" rx="8" fill="#21262d" stroke="#3fb950" />
        <text x="440" y="55" text-anchor="middle" font-weight="700">Containers</text>
        <rect x="395" y="75" width="35" height="35" rx="4" fill="#1f3d2a" stroke="#3fb950" />
        <rect x="438" y="75" width="35" height="35" rx="4" fill="#1f3d2a" stroke="#3fb950" />
        <rect x="395" y="118" width="35" height="35" rx="4" fill="#1f3d2a" stroke="#3fb950" />
        <rect x="438" y="118" width="35" height="35" rx="4" fill="#1f3d2a" stroke="#3fb950" />
        <text x="440" y="165" text-anchor="middle" fill="#8b949e" font-size="10">Shared Kernel</text>

        <text x="560" y="100" text-anchor="middle" fill="#d29922">Waste of</text>
        <text x="560" y="118" text-anchor="middle" fill="#d29922">Resources</text>
      </g>
    </svg>
  </DiagramBase>
</template>
