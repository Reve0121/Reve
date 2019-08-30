<template>
  <div class="flex">
    <el-card class="settings-menu" shadow="never">
      <div slot="header">
        <p>Personal settings</p>
      </div>
      <div>
        <router-link class="routerLink" to="/settings/profile">
          <p>Profile</p>
        </router-link>
      </div>
      <div>
        <router-link class="routerLink" to="/settings/account">
          <p>Account</p>
        </router-link>
      </div>
      <div>
        <router-link class="routerLink" to="/settings/security">
          <p>Security</p>
        </router-link>
      </div>
    </el-card>
    <div class="settings-body defaultPadding">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings"
};
</script>

<style lang="scss">
.settings-menu {
  width: 18%;
  min-width: 200px;
}
.settings-body {
  width: 82%;
}
</style>
