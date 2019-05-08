<template>
  <div class="menu-item pointer center">
    <Dropdown>
      <Icon type="md-person"/>
      <Icon type="md-arrow-dropdown"/>
      <DropdownMenu slot="list" style="min-width:auto;">
        <DropdownItem name="userName">
          <router-link class="routerLink" to="/home">{{ userName }}</router-link>
        </DropdownItem>
      </DropdownMenu>
      <DropdownMenu
        slot="list"
        style="min-width:auto;"
        v-for="(item,index) in dropdownList"
        :key="item.path + index"
      >
        <DropdownItem :divided="index == 0">
        <router-link class="routerLink" :to="item.path">{{item.page}}</router-link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  name: "Avatar",
  props: ["userName"],
  data() {
    return {
      dropdownList: [{page:"Settings",path:"/settings/profile"},{page:"Help",path:"/help"},{page:"Sign Out",path:"/home"}]
    };
  },
  methods: {
    setting(name) { 
      console.log(name);
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-item {
  margin: 0 8px 0 3px;
}
</style>
