<template>
  <header>
    <h1>
      Intersection <span>{{ visible }}</span>
    </h1>
  </header>
  <div class="outter">
    <div ref="target" class="inner"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const visible = ref(false)
function toggleVisible() {
  visible.value = !visible.value
}
/** Intersection
 *
 * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
 */
let observer = new IntersectionObserver(
  (entries, observer) => {
    console.log({
      entries,
      observer,
    })
    toggleVisible()
  },
  {
    threshold: 0.5,
  }
)

const target = ref<Element>()
onMounted(() => {
  observer.observe(target.value as Element)
})
</script>

<style lang="scss">
header {
  position: sticky;
  top: 10px;
}

.outter {
  height: 120vh;
  border: 1px solid red;
  .inner {
    width: 20vmin;
    height: 20vmin;
    background: #ece2ff;
  }
}
</style>
