<template>
  <div class="test1 center">
    <div class="test0121">Test Transition</div>
  </div>
</template>

<script>
export default {
  name: "T2"
};
</script>

<style lang="scss">
.test0121 {
  width: 121px;
  height: 121px;
  color: #ffffff;
  background: rgba($color: #0121, $alpha: 0.6);
  margin: auto;
}
.test0121:hover {
  cursor: pointer;
  // height: 221px;
  transition-property: all;
  transition-delay: 0s;
  transition-duration: 1s;
  transition-timing-function: ease;
  color: red;
  animation: 1s rainbow infinite;
}
@keyframes rainbow {
  0% {
    background: #c00;
  }
  50% {
    background: orange;
  }
  100% {
    background: yellowgreen;
  }
}

</style>