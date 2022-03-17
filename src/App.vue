<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld, { Props } from './components/HelloWorld.vue'
const props: Props = {
  msg: 'a',
}
console.log(HelloWorld._props)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :props="props" :other="1" />
  <HelloWorld v-props="props" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // try assign to instance by directives
  directives: {
    props: (el, { value, instance }) => {
      instance.props = value
      console.log('instance.props', instance.props)
      // The assignment was successful, but it didn't work in the end.
      // It should be because the Vue compiler change 'instance.props' finally.
      // As document says about $props: 'An object representing the component's current, resolved props.'
    },
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
