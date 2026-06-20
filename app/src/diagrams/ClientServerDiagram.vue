<script setup lang="ts">
import DiagramBase from './DiagramBase.vue'
</script>

<template>
  <DiagramBase title="Docker Client / Server Architecture">
    <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Cairo,sans-serif" font-size="12">
        <rect x="30" y="50" width="140" height="80" rx="10" fill="#21262d" stroke="#2496ed" />
        <text x="100" y="80" text-anchor="middle" fill="#79c0ff" font-weight="700">Docker Client</text>
        <text x="100" y="100" text-anchor="middle" fill="#8b949e" font-size="10">CLI commands</text>
        <text x="100" y="115" text-anchor="middle" fill="#8b949e" font-size="10">docker info, run...</text>

        <path d="M175 90 H230" stroke="#2496ed" stroke-width="2" stroke-dasharray="6 4" />
        <text x="202" y="80" text-anchor="middle" fill="#8b949e" font-size="9">docker.sock</text>

        <rect x="240" y="50" width="140" height="80" rx="10" fill="#21262d" stroke="#3fb950" />
        <text x="310" y="80" text-anchor="middle" fill="#3fb950" font-weight="700">Docker Daemon</text>
        <text x="310" y="100" text-anchor="middle" fill="#8b949e" font-size="10">dockerd (server)</text>
        <text x="310" y="115" text-anchor="middle" fill="#8b949e" font-size="10">needs sudo / group</text>

        <rect x="410" y="50" width="70" height="80" rx="8" fill="#1f3d2a" stroke="#3fb950" />
        <text x="445" y="95" text-anchor="middle" fill="#e6edf3" font-size="10">Containers</text>

        <text x="250" y="30" text-anchor="middle" fill="#d29922" font-size="11">Permission denied → sudo docker</text>
      </g>
    </svg>
  </DiagramBase>
</template>
