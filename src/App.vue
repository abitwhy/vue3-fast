<script setup lang="ts">
import AComponent, { Props } from './components/AComponent.vue'

const props: Props = {
  worker: 'TypeScript',
}

</script>

<template>
  <AComponent v-bind="props" />
</template>
