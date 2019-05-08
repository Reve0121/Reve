<template>
  <div class="menu-item pointer center" @click="openLoginDialog=true">
    <span class="routerLink">Log in</span>
    <Modal
      v-model="openLoginDialog"
      :closable="false"
      :mask-closable="false"
      title="Log Into Reve"
      ok-text="Log In"
      class-name="vertical-center-modal"
    >
      <Form ref="loginValidate" v-model="loginValidate" label-position="top">
        <FormItem label="Username or email address" prop="name">
          <Input
            prefix="md-person"
            clearable
            v-model="loginValidate.name"
            placeholder="Username or email address"
          />
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input
            prefix="md-lock"
            clearable
            type="password"
            v-model="loginValidate.password"
            placeholder="Password"
          />
        </FormItem>
      </Form>
      <Alert
        v-if="showErrorMessage"
        type="error"
        closable
        @on-close="closeAlert"
      >Incorrect username or password.</Alert>
      <div slot="footer">
        <Button
          type="text"
          size="large"
          :disabled="isModalLoading"
          @click="closeLoginDialog"
        >Cancel</Button>
        <Button type="primary" size="large" :loading="isModalLoading" @click="asyncLogin">Log In</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      openLoginDialog: false,
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
      let randomNum = this.$tools.random(1, 10);
      console.log(randomNum);
      setTimeout(() => {
        this.isModalLoading = false;
        if (randomNum % 2 == 0) {
          this.openLoginDialog = false;
        } else {
          this.showErrorMessage = true;
          this.openLoginDialog = true;
        }
      }, 2000);
    },
    closeLoginDialog(){
      this.openLoginDialog = false;
      this.showErrorMessage = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-item {
  margin: 0 8px 0 3px;
}
</style>
