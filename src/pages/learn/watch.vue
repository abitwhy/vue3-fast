<script setup lang="ts">
import { cloneDeep } from 'lodash'
// 侦听响应式对象
const numbers = reactive([1, 2, 3, 4])
watch(
  () => [...numbers],
  (numbers, prevNumbers) => {
    console.log(numbers, prevNumbers)
  }
)

const state = reactive({ id: 1, attributes: { name: '' } })
// 深度侦听
watch(
  () => state,
  (state, prevState) => {
    console.log('deep', state.attributes.name, prevState.attributes.name)
  },
  { deep: true }
)
// 深度侦听，且 state 与 prevState 有差异
watch(
  () => cloneDeep(state),
  (state, prevState) => {
    console.log(
      'deep and diff state',
      state.attributes.name,
      prevState.attributes.name
    )
  },
  { deep: true }
)
</script>

<template>
  <button @click="numbers.push(numbers[numbers.length - 1] + 1)">push</button>
  <p>
    <code>
      {{ numbers }}
    </code>
  </p>
  <input v-model="state.attributes.name" type="text" />
</template>
