<script setup lang="ts">
import { useModel } from '~/stores/app'

const app = useModel()
const model = ref(app.model)
const { MODELS: models, SET_MODEL } = app

watchEffect(() => {
  SET_MODEL(model.value)
})
</script>

<template>
  <p>{{ model }}</p>
  <select v-model="model" name="model">
    <option v-for="(item, index) in models" :key="index" :value="item">
      {{ item }}
    </option>
  </select>
</template>
