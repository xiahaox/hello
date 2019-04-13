<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="count"
      @change="countChanged"
      ref="numbox"
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 分析：子组件什么时候把值传递给父组件 -->
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  props: ["count", "id"],
  mounted() {
    //初始化数字选择组件
    mui(".mui-numbox").numbox();
  },
  data() {
    return {};
  },
  methods: {
    countChanged() {
      // console.log(this.$refs.numbox.value);
      var obj = { id: this.id, count: this.$refs.numbox.value };
      // console.log(obj);
      this.$store.commit("updateCarCount", obj);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
