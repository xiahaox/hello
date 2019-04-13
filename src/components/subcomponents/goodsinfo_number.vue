<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input @change="getNum" ref="numbox" id="test" class="mui-input-numbox" type="number" value="1">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  props: ["max"],
  watch: {
    max: function(newVal, oldVal) {
      //  console.log(newVal, oldVal);  60 undefined
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  },
  data() {
    return {};
  },
  methods: {
    // 表单绑定change事件 ，只要value变化 就会触发
    getNum() {
      //第二种思路
      // console.log(event.target.value) 事件委托 获取表单值
      // console.log(this.$refs.numbox.value);
      this.$emit("func", parseInt(this.$refs.numbox.value));
    }
  },
  mounted() {
    //初始化数字选择组件
    mui(".mui-numbox").numbox();
  }
};
</script>
<style lang="scss" scoped>
</style>