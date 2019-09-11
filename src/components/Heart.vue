<template>
  <div id="heart"></div>
</template>

<script>
export default {
  name: "Heart",
  data: function() {
    return { fullscreenLoading: false };
  }
};
</script>
<style>
#heart {
  position: relative;
  width: 100px;
  height: 90px;
  cursor: pointer;
  animation: pound 0.6s linear infinite;
}

#heart:before,
#heart:after {
  position: absolute;
  content: "";
  left: 55px;
  top: 0;
  width: 55px;
  height: 80px;
  background: red;
  border-radius: 50px 50px 0 0;
  -moz-border-radius: 50px 50px 0 0;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 100%;
  -moz-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -o-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

#heart:after {
  left: 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
  -moz-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  -o-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
@keyframes pound {
  from { transform: none; }
  to { transform: scale(0.5); }
}

</style>