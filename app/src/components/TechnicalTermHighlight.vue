<script setup lang="ts">
const TECH_TERMS = [
  'Docker', 'Kubernetes', 'K8s', 'Container', 'containerd', 'runc', 'Hypervisor',
  'VMware', 'Hyper-V', 'Minikube', 'Pod', 'YAML', 'VSCode', 'Compose', 'Swarm',
  'Portainer', 'Dockerfile', 'localhost', 'dockerd', 'docker.sock', 'Linux',
  'Windows', 'Kernel', 'CLI', 'Daemon', 'Image', 'Registry', 'Volume', 'Network',
  'Virtual Machine', 'VM', 'Operating System', 'OS', 'Hardware', 'Guest OS', 'Template'
]

function highlight(text: string): string {
  let result = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const sorted = [...TECH_TERMS].sort((a, b) => b.length - a.length)
  for (const term of sorted) {
    const regex = new RegExp(`(?<![a-zA-Z])(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![a-zA-Z])`, 'gi')
    result = result.replace(regex, '<span class="term">$1</span>')
  }
  return result
}

defineProps<{ text: string }>()
</script>

<template>
  <span class="highlight" v-html="highlight(text)" />
</template>

<style scoped>
.highlight :deep(.term) {
  color: var(--docker);
  font-family: 'Fira Code', monospace;
  font-weight: 600;
}
</style>
