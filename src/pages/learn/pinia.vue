<template>
  <p>{{ model }}</p>
  <select v-model="model" name="model">
    <option v-for="(item, index) in MODELS" :key="index" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useModel } from '~/stores/app'

const { MODEL, SET_MODEL, MODELS } = useModel()
const model = ref(MODEL)

watchEffect(() => {
  SET_MODEL(model.value)
})
</script>
