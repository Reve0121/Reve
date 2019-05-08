<template >
  <div class="flex menu-container">
    <div
      v-bind:class="['menu-item pointer center',selectedItem === menu.item ? 'selected-item' : '']"
      @click="hightMenu(menu.item)"
      v-for="(menu,index) in menus"
      :key="menu.item + index"
    >
      <router-link class="routerLink" :to="menu.path">{{menu.item}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["menus"],
  data() {
    return {
      selectedItem: ""
    };
  },
  methods: {
    hightMenu: function(item) {
      this.selectedItem = item;
      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  flex: 0 0 70%;
  margin: auto;
  justify-content: center;
}
.menu-item {
  margin: 0 15px;
}
.selected-item {
  font-weight: bold;
}
</style>
