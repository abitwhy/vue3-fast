<template>
  <div class="container">
    <div class="content"></div>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background: #cccccc;
}
.container {
  overflow-y: auto;
  height: 40vh;
  .content {
    height: 200%;
    background: radial-gradient(#f4f7c8, #a09fc7);
  }
}
</style>
