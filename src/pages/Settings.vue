<template>
  <div class="flex">
    <Card class="settings-menu" title="Personal settings" dis-hover>
      <CellGroup>
        <Cell title="Profile" to="/settings/profile">
          <span slot="arrow"></span>
        </Cell>
        <Cell title="Account" to="/settings/account"><span slot="arrow"></span></Cell>        
        <Cell title="Security" to="/settings/security"><span slot="arrow"></span></Cell>
      </CellGroup>
    </Card>
    <div class="settings-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings"
};
</script>

<style lang="scss" scoped>
.settings-menu {
  width: 15%;
}
.settings-body {
  width: 85%;
  background-color: #f5f5f5;
}
</style>
