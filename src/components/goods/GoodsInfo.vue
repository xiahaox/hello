<template>
  <div class="goodsinfo-container">
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunboData"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header"></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>&yen;{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">&yen;{{goodsInfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numbox @func="getCount" :max="goodsInfo.stock_quantity"></numbox>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}</p>
          <p>上架时间：{{goodsInfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDes(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_number.vue";
export default {
  name: "goodsInfo", //命名组件
  data() {
    return {
      id: this.$route.params.id,
      lunboData: [],
      goodsInfo: "",
      flag: false,
      selectCount: 1
    };
  },
  methods: {
    getLunbotu() {
      this.$http.get(`api/getthumimages/${this.id}`).then(result => {
        //console.log(result.body);
        if (result.body.status == 0) {
          result.body.message.forEach(element => {
            element.img = element.src;
          });
          //console.log(result.body.message);
          this.lunboData = result.body.message;
        }
      });
    },
    //获取商品参数区和价格，标题等数据
    getGoodsIndo() {
      this.$http.get(`api/goods/getinfo/${this.id}`).then(result => {
        if (result.body.status == 0) {
          this.goodsInfo = result.body.message[0];
        }
      });
    },
    //点击使用编程式路由导航进行跳转
    goDes(id) {
      //图文介绍
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      //评论
      this.$router.push({ path: "/home/goComment/" + id });
    },
    //小球动画
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //获取小球位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const x = badgePosition.left - ballPosition.left;
      const y = badgePosition.top - ballPosition.top;

      el.offsetWidth;
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 0.4s cubic-bezier(.17,.67,.8,.99)";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    //子向父传值 购买数量
    getCount(num) {
      console.log(num);
      this.selectCount = num;
    },
    //点击添加购物车
    addToShopCar() {
      this.flag = !this.flag;
      const obj = {
        id: this.id,
        count: this.selectCount,
        price: this.goodsInfo.sell_price,
        selected: true
      };
      this.$store.commit("addCar", obj);
    }
  },
  created() {
    this.getLunbotu();
    this.getGoodsIndo();
  },
  components: {
    swiper,
    numbox
  }
};
// $route, 路由参数对象，
//$router 路由导航对象，实现路由的跳转
</script>
<style lang="scss" scoped>
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 391px;
  left: 146px;
}
</style>