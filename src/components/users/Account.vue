<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    User account
    <el-divider size="small"></el-divider>
    <div class="flex">
      <div class="center">
        <Heart></Heart>
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "@/components/Heart.vue";

let mixin = {
  created: function() {
    console.log("mixin : 111111111111");
  }
};

export default {
  name: "Account",
  mixins: [mixin],
  components: {
    Heart
  },
  data: function() {
    return { fullscreenLoading: false };
  },
  created: function() {
    console.log("component : 111111111111");
  }
};
</script>
<style>
</style>