<template>
  <div class="menu-item pointer center">
    <p class="routerLink" @click="openLoginDialog">Sign in</p>
    <el-dialog
      :visible.sync="showLoginDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      title="Sign in to Reve"
      class="vertical-center-modal"
    >
      <el-form ref="loginValidate" v-model="loginValidate">
        <el-form-item label="Username or email address" prop="name">
          <el-input clearable v-model="loginValidate.name" placeholder="Username or email address">
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            clearable
            type="password"
            v-model="loginValidate.password"
            placeholder="Password"
          >
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-alert
        v-if="showErrorMessage"
        type="error"
        closable
        @close="closeAlert"
      >Incorrect username or password.</el-alert>
      <div slot="footer">
        <el-button type="text" size="large" @click="closeLoginDialog">Cancel</el-button>
        <el-button type="primary" size="large" :loading="isModalLoading" @click="asyncLogin">Sign in</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Signin",
  data() {
    return {
      showLoginDialog: false,
      showErrorMessage: false,
      isModalLoading: false,
      loginValidate: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    closeAlert() {
      this.showErrorMessage = false;
    },
    asyncLogin: async function() {
      this.isModalLoading = true;
      let randomNum = this.$tools.randomNum(1, 10);
      console.log(randomNum);
      setTimeout(() => {
        this.isModalLoading = false;
        if (randomNum % 2 == 0) {
          this.showLoginDialog = false;
        } else {
          this.showErrorMessage = true;
          this.showLoginDialog = true;
        }
      }, 2000);
    },
    openLoginDialog() {
      this.showLoginDialog = true;
    },
    closeLoginDialog() {
      this.showLoginDialog = false;
      this.showErrorMessage = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.vertical-center-modal {
  width: 50%;
  margin: auto;
}
.menu-item {
  margin: 0 8px 0 3px;
}
</style>
