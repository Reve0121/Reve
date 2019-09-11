<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    Security
    <el-divider size="small"></el-divider>
    <div class="flex-column">
      <div class="test1 center" @click.capture="test(1)">
        test1
        <div class="test2 center" @click.capture="test(2)">
          test2
          <a class="test3 center" @click="test(3)">
            test3
            <span class="center" style="background-color:#0121;color:#fff;" @click="test(4)">{{value}}</span>
          </a>
        </div>
      </div>
      <div class="test1">
        <input type="text" v-model.trim="value" @keyup.enter="test('keyup')" />
      </div>
      <div>
        <component v-bind:is="componentName"></component>
      </div>
    </div>
  </div>
</template>

<script>
import T1 from "@/components/Test.vue"
import T2 from "@/components/Test2.vue"

export default {
  name: "Security",
  data: function() {
    return {
      fullscreenLoading: false,
      value: "",
      componentName:'T2',
      
    };
  },
  components:{T1,T2},
  methods: {
    test: function(e) {
      alert(e);
      if(e == 1){
        this.componentName="T1";
      }else if(e == 2){
        this.componentName="T2";
      }
    }
  }
};
</script>

<style lang="scss" >
.test1 {  
  width: 500px;
  height: 300px;
  border: 1px solid red;
  margin: 10px 0;
}
.test2 {
  width: 65%;
  height: 65%;
  border: 1px solid green;
  margin:auto;
}
.test3 {
  width: 65%;
  height: 65%;
  border: 1px solid darkmagenta;  
}
</style>