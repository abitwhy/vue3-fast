<template>
  <h1>{{ `${task} by ${worker}.` }}</h1>
</template>

<script setup lang="ts">
interface Props {
  task?: string
  worker: 'Vue' | 'TypeScript' | string
}

defineProps<Props>()
</script>
