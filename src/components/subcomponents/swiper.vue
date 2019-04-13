<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt :class="{full:isfull,self:isself}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["lunbotuList", "isfull", "isself"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-items-wrap {
    .mint-swipe-item {
      img {
        // width: 100%;
        height: 100%;
        display: block;
        margin: auto;
      }
    }
  }
}
.mui-table-view {
  .mui-table-view-cell {
    background-color: #fff;
    border: none;
    img {
      display: block;
      margin: auto;
    }
  }
}
.full {
  width: 100%;
}
// .self {
//   display: block;
//   margin: auto;
// }
</style>