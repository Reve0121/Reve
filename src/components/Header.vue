<template>
  <div class="header flex">
    <div class="header-logo pointer center">
      <router-link class="routerLink" to="/home">
        <img src="../assets/images/Reve.png" />
      </router-link>
      <router-link class="routerLink" to="/home">
        <h2 class="menu-item">Reve</h2>
      </router-link>
    </div>
    <div class="header-menu flex">
      <div class="menu-item pointer center">
        <el-dropdown @command="switchLanguage">
          <span>
            {{language}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="min-width:auto;">
            <el-dropdown-item command="简体中文">简体中文</el-dropdown-item>
            <el-dropdown-item command="English">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="menu-item pointer center">
        <Signin ></Signin>
        <Avatar v-if="false" v-bind:userName="userName"></Avatar>
      </div>
    </div>
  </div>
</template>

<script>
import Signin from "@/components/Signin";
import Avatar from "@/components/Avatar";

export default {
  name: "Header",
  data() {
    return {
      userName: "YoYo",
      language: "English"
    };
  },
  components: {
    Signin,
    Avatar
  },
  methods: {
    switchLanguage: function(item) {
      this.language = item;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  margin: auto;
}
.header-logo {
  flex: 0 0 15%;
}
.header-menu {
  flex: 0 0 85%;
  justify-content: flex-end;
}
.menu-item {
  margin: 0 8px 0 3px;
}
</style>
