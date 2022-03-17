<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// declaration
export interface Props {
  msg: 'a' | 'b'
}
// defualt
const _props: Props = {
  msg: 'a',
}

const Component = {
  ...defineComponent({
    // pass the original verification
    // And how to close?
    props: {
      props: { validator: () => true },
    },
    // assign to instance
    setup(props, context) {
      return { ...(props.props as Props) }
    },
    created() {
      console.log('instance',this);
    }
  }),
  // expose defualt
  // You have to alias before closing the original verification.
  _props,
}

export default Component
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
