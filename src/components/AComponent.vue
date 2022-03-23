<template>
  <h1>{{ `${task} by ${worker}.` }}</h1>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue'
import { defaultsDeep, omit, pick } from 'lodash'

// declaration
export interface Props {
  task?: string
  worker: 'Vue' | 'TypeScript'
}
// defualt
const props: Props = {
  task: 'Validate props',
  worker: 'Vue',
}

// make it work
export default defineComponent({
  /* declare props by default validator */
  // props: Object.keys(props).reduce(
  //   (propsValidator, prop) => ({
  //     ...propsValidator,
  //     [prop]: { validator: () => true },
  //   }),
  //   {}
  // ),
  // setup(customProps) {
  //   /** define props
  //    * defaultsdeep will change the proxy original object returned by `toRaw`
  //    * However, this change will not lead to component updates.
  //    * So need to return
  //    */
  //   return defaultsDeep(toRaw(customProps), props)
  // },

  /* or */

  /* declare props manually */
  setup(customProps, context) {
    // get props from attrs
    const propsFromAttrs = pick(context.attrs, Object.keys(props))

    /** remove props in attrs
     * fail: `context.attrs` is read-only.
     * An imperfect alternative is set `inheritAttrs` to `false`.
     */
    // context.attrs = omit(context.attrs, propsFromAttributes)

    // define props
    return defaultsDeep(propsFromAttrs, props)
  },
  inheritAttrs: false,
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
