<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    Public profile
    <el-divider size="small"></el-divider>
    <div class="flex">
      <div class="user-profile">
        <el-form
          ref="userProfile"
          :model="userProfile"
          :rules="rulesForProfile"
          label-position="top"
        >
          <el-form-item label="First Name" prop="firstName">
            <el-input v-model="userProfile.firstName"></el-input>
          </el-form-item>
          <el-form-item label="Last Name" prop="lastName">
            <el-input v-model="userProfile.lastName"></el-input>
          </el-form-item>
          <el-form-item label="Phone" prop="phone">
            <el-input v-model="userProfile.phone"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="emailAddress">
            <el-input v-model="userProfile.emailAddress"></el-input>
          </el-form-item>
          <el-form-item label="Address" prop="address">
            <el-cascader
              class="cascader"
              :options="pcasData"
              v-model="userProfile.address"
              clearable
            >
              <template slot-scope="{node,data}">
                <span>{{data.label}}</span>
                <span v-if="!node.isLeaf">({{ data.children.length }})</span>
              </template>
            </el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('userProfile')">Update Profile</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-avatar">avatar</div>
    </div>
  </div>
</template>

<script>
const PcasCodes = require("../../../static/pcas-code.json");
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
    let pcasDataTemp = this.$tools.replaceAll(PcasCodes, "name", "label");
    pcasDataTemp = this.$tools.replaceAll(pcasDataTemp, "code", "value");

    return {
      fullscreenLoading: false,
      pcasData: pcasDataTemp,
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
        title: null,
        address: ""
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
        address: [
          {
            required: true,
            message: "Address cannot be empty",
            trigger: "change"
          }
        ]
      }
    };
  },
  mounted: function() {
    // this.getCustomerInfo();
  },
  methods: {
    getCustomerInfo: async function() {
      this.fullscreenLoading = true;
      let api = "/api/customer/getCustomerById/21";
      let response = await this.$get(api);
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 3000);
      if (response.isSuccess) {
        this.userProfile = response.data;
      } else {
        this.$message.error(response.message);
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          console.log(this.userProfile);
          setTimeout(() => {
            this.$message.success("Success!");
            this.fullscreenLoading = false;
          }, 2000);
        } else {
          this.$message.error("Fail!");
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
.cascader {
  width: 100%;
}
</style>
