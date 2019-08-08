<template>
  <div>
    Public profile
    <Divider size="small" />
    <div class="flex">
      <div class="user-profile">
        <Form ref="userProfile" :model="userProfile" :rules="rulesForProfile" label-position="top">
          <FormItem label="Name" prop="name">
            <Input v-model="userProfile.name" />
          </FormItem>
          <FormItem label="Tel" prop="tel">
            <Input v-model="userProfile.tel" />
          </FormItem>
          <FormItem label="Email" prop="email">
            <Input v-model="userProfile.email" />
          </FormItem>
          <FormItem label="Address" prop="address">
            <Cascader :data="pcasData"></Cascader>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('userProfile')">Update Profile</Button>
          </FormItem>
        </Form>
      </div>
      <div class="user-avatar">avatar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    var validateName = (rule, value, callback) => {
      let name = this.$tools.trimString(value);
      if (!name) {
        callback(new Error("Name cannot be empty"));
      } else {
        callback();
      }
    };
    var validateTel = (rule, value, callback) => {
      let reg = /^1[3|4|5|7|8]\d{9}$/;
      if (!reg.test(value)) {
        callback(new Error("Incorrect tel format"));
      } else {
        callback();
      }
    };
    return {
      pcasData: "",
      userProfile: {
        name: "reve",
        tel: 15872105496,
        email: "1234562@qwe.com",
        address: ""
      },
      rulesForProfile: {
        name: [{ required: true, validator: validateName, trigger: "blur" }],
        tel: [{ required: true, validator: validateTel, trigger: "blur" }],
        email: [
          { required: true, message: "Email cannot be empty", trigger: "blur" },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        address: []
      }
    };
  },
  created: async function() {
   this.pcasData = await this.readTextFile();    
  },
  methods: {
    readTextFile: async function() {
       let filePath = "/static/pcas-code.json";
       let resData= await this.$get(filePath);
       console.log(resData);
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        this.$Spin.show();
        if (valid) {
          setTimeout(() => {
            this.$Message.success("Success!");
            this.$Spin.hide();
          }, 2000);
        } else {
          setTimeout(() => {
            this.$Message.error("Fail!");
            this.$Spin.hide();
          }, 2000);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.user-profile {
  width: 60%;
}
.user-avatar {
  width: 40%;
}
</style>
