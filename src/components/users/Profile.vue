<template>
  <div>
    Public profile
    <Divider size="small" />
    <div class="flex">
      <div class="user-profile">
        <Form ref="userProfile" :model="userProfile" :rules="rulesForProfile" label-position="top">
          <FormItem label="First Name" prop="firstName">
            <Input v-model="userProfile.firstName" />
          </FormItem>
          <FormItem label="Last Name" prop="lastName">
            <Input v-model="userProfile.lastName" />
          </FormItem>
          <FormItem label="Phone" prop="phone">
            <Input v-model="userProfile.phone" />
          </FormItem>
          <FormItem label="EmailAddress" prop="emailAddress">
            <Input v-model="userProfile.emailAddress" />
          </FormItem>
          <FormItem label="Address" prop="address">
            <!-- <Cascader :data="pcasData"></Cascader> -->
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
        callback(new Error("This name cannot be empty"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      // let reg = /^1[3|4|5|7|8]\d{9}$/;
      // if (!reg.test(value)) {
      //   callback(new Error("Incorrect phone format"));
      // } else {
      //   callback();
      // }
      let phone = this.$tools.trimString(value);
      if (!phone) {
        callback(new Error("Incorrect phone format"));
      } else {
        callback();
      }
    };
    return {
      pcasData: "",      
      userProfile: {
        firstName: "",
        modifiedDate: "",
        companyName: "",
        customerID: 0,
        emailAddress: "",
        lastName: "",
        middleName: "",
        nameStyle: false,
        passwordSalt: "",
        phone: "",
        rowguid: "",
        salesPerson: "",
        suffix: null,
        title: null
      },
      rulesForProfile: {
        firstName: [
          { required: true, validator: validateName, trigger: "blur" }
        ],
        lastName: [
          { required: true, validator: validateName, trigger: "blur" }
        ],
        phone: [{ required: true, validator: validatePhone, trigger: "blur" }],
        emailAddress: [
          {
            required: true,
            message: "EmailAddress cannot be empty",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Incorrect emailAddress format",
            trigger: "blur"
          }
        ],
        address: []
      }
    };
  },
  mounted: async function() {
    this.getCustomerInfo();
  },
  methods: {
    readTextFile: async function() {
      let filePath = "/static/pcas-code.json";
      let resData = await this.$get(filePath);
      console.log(resData);
    },
    getCustomerInfo: async function() {
      this.$Spin.show();
      let api = "/api/customer/getCustomerById/21";
      let response = await this.$get(api);
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
      if (response.isSuccess) {
        this.userProfile = response.data;
      } else {
        this.$Message.error(response.message);
      }
      
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        this.$Spin.show();
        if (valid) {
          console.log(this.userProfile);
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
