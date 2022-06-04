<template>
  <h1>The way to import a json file</h1>
  <ul>
    <li>Ues `fetch()`</li>
    <li>Ues import with assert(a ES6 proposal)</li>
    <li>Ues import (TS)</li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const tsconfig = ref({})
onBeforeMount(async () => {
  const res = await fetch('/tsconfig.json')
  tsconfig.value = await res.json()
})

/** import json file ES
 *
 * @note 这是一个 ES6 提案
 *
 * @doc https://es6.ruanyifeng.com/?search=%E6%8E%A5%E5%8F%A3&x=0&y=0#docs/proposals#JSON-%E6%A8%A1%E5%9D%97
 */
// import tsconfig from '/tsconfig.json' assert { type: "json" };

/** import json file TS
 * tsconfig.json 里开启 resolveJsonModule 配置即可使用
 *
 * @doc https://www.typescriptlang.org/tsconfig#resolveJsonModule
 */
// import tsconfig from '/tsconfig.json'
// console.log(JSON.stringify(tsconfig))
</script>
