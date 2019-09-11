<template>
  <div class="test1">
    <div class="flex" style="justify-content: space-around;">
      <el-button type="primary" @click="changeTheme ('default')">Default</el-button>
      <el-button type="primary" @click="changeTheme ('red')">Red</el-button>
      <div class="button" @click="changeTheme ('blue')">Blue</div>
      <div class="button" @click="changeTheme ('green')">Green</div>
    </div>
    <div class="test3 Center flex" v-bind:class="theme ">component 1</div>
  </div>
</template>

<script>
export default {
  name: "T1", 
  data: function() {
    return {
      theme: "default"
    };
  },
  methods: {
    changeTheme: function(value) {
      this.theme = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.default {
  color: #000;
}
.red {
  color: red;
  background: rgba($color: #0121, $alpha: 0.8);
}
.blue {
  color: blue;
  background: rgba($color: #ff69b4, $alpha: 0.8);
}
.green {
  color: green;
  background: rgba($color: #4b0082, $alpha: 0.8);
}
</style>