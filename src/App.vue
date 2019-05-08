<template>
 <div class="app-container flex">
    <Header></Header>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
 name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 60vw;
  min-width: 60vw;
  height: 100vh;
  flex-direction: column;
  margin: auto;
}
.app-body {
  flex: 1;
}

</style>
