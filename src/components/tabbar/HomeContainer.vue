<template>
  <div>
    <!-- 轮播图 -->
    <swiper :lunbotuList="lunbotilist" :isfull="true"></swiper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newsList">
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/Goodlist">
          <img src="../../images/menu3.png" alt>
          <div class="mui-media-body">Goodlist</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu4.png" alt>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu5.png" alt>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img src="../../images/menu6.png" alt>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/swiper.vue";
export default {
  data() {
    return {
      lunbotilist: []
    };
  },
  created() {
    this.getLuboto();
  },
  methods: {
    getLuboto() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          console.log(result);
          if (result.status == 200) {
            this.lunbotilist = result.body.message;
          } else {
            Toast("请求失败");
          }
        });
    }
  },
  components: {
    swiper: swiper
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-table-view {
  .mui-table-view-cell {
    background-color: #fff;
    border: none;
    img {
      width: 60px;
    }
  }
}
</style>