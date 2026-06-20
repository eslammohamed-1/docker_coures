<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Docker Engine Architecture — Loosely Coupled">
    <svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="11">
        <rect x="10" y="70" width="90" height="60" rx="8" fill="#21262d" stroke="#2496ed" />
        <text x="55" y="95" text-anchor="middle" fill="#79c0ff" font-weight="700">CLI</text>
        <text x="55" y="112" text-anchor="middle" fill="#8b949e" font-size="9">Client</text>

        <rect x="130" y="70" width="100" height="60" rx="8" fill="#21262d" stroke="#3fb950" />
        <text x="180" y="95" text-anchor="middle" fill="#3fb950" font-weight="700">dockerd</text>
        <text x="180" y="112" text-anchor="middle" fill="#8b949e" font-size="9">Daemon</text>

        <rect x="260" y="70" width="110" height="60" rx="8" fill="#21262d" stroke="#e3b341" />
        <text x="315" y="95" text-anchor="middle" fill="#e3b341" font-weight="700">containerd</text>
        <text x="315" y="112" text-anchor="middle" fill="#8b949e" font-size="9">Container mgmt</text>

        <rect x="400" y="70" width="80" height="60" rx="8" fill="#21262d" stroke="#bc8cff" />
        <text x="440" y="100" text-anchor="middle" fill="#bc8cff" font-weight="700">runc</text>

        <rect x="510" y="70" width="110" height="60" rx="8" fill="#1f3d2a" stroke="#3fb950" />
        <text x="565" y="95" text-anchor="middle" fill="#3fb950">Container</text>
        <text x="565" y="112" text-anchor="middle" fill="#8b949e" font-size="9">+ shim process</text>

        <path d="M100 100 H125 M230 100 H255 M370 100 H395 M480 100 H505" stroke="#2496ed" stroke-width="2" />

        <text x="320" y="40" text-anchor="middle" fill="#8b949e">Upgrade daemon → containers keep running</text>
        <text x="320" y="165" text-anchor="middle" fill="#d29922" font-size="10">One containerd · One dockerd · runc per container</text>
      </g>
    </svg>
  </DiagramBase>
</template>
