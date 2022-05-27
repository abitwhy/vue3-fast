<template>
  <p>count:{{ count }}</p>
  <p>obj:{{ obj }}</p>
  <button @click="count++">count++</button>
  <button @click="obj.count++">obj.count++</button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const count = ref(0)
const obj = reactive({ count })
</script>
