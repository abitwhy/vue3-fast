<template>
  <h1>The way to import a json file</h1>
  <ul>
    <li>Ues `fetch()`</li>
    <li>Ues import (a ES6 proposal)</li>
  </ul>
</template>

<script setup lang="ts">
const tsconfig = ref({})
onBeforeMount(async () => {
  const res = await fetch('/tsconfig.json')
  tsconfig.value = await res.json()
})

/** import json file
 *
 * @note 这是一个 ES6 提案
 *
 * @doc https://es6.ruanyifeng.com/?search=%E6%8E%A5%E5%8F%A3&x=0&y=0#docs/proposals#JSON-%E6%A8%A1%E5%9D%97
 */
// import tsconfig from '/tsconfig.json' assert { type: "json" };
</script>
