<template>
  <div>
    <Menu v-bind:menus="menus"></Menu>
    <p>Home page</p>
    <el-rate v-model="value"></el-rate>
    <p>{{value}}</p>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "Home",
  data() {
    return {
      value: 0,
      menus: [
        {
          item: "News",
          path: "/home"
        },
        {
          item: "NBA",
          path: "/home"
        },
        {
          item: "Movies",
          path: "/movies"
        }
      ]
    };
  },
  components: {
    Menu
  }
};
</script>
