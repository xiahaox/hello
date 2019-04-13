<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item,index) in carList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">{{item.sell_price}}</span>
                <numbox :count="$store.getters.getIdCount[item.id]" :id="item.id"></numbox>
                <a @click="removeItem(index,item.id)" href="javascript:;">删除</a>
                <span>{{$store.getters.getIdCount[item.id]}}</span>
                <span>{{$store.getters.getGoodsSelected[item.id]}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>
              已勾选商品{{$store.getters.getTotalValue.count}}件，
              <span
                class="red"
              >总价&yen;{{$store.getters.getTotalValue.total}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from "../subcomponents/shopCar_number.vue";
export default {
  data() {
    return {
      carList: []
    };
  },
  created() {
    this.getCarList();
  },
  methods: {
    getCarList() {
      //获取store 中所有的id 拼接成一个字符串
      var idArr = [];
      this.$store.state.car.forEach(element => {
        idArr.push(element.id);
      });
      var idStr = idArr.join(",");
      if (idArr.length <= 0) {
        return;
      }
      this.$http.get(`api/goods/getshopcarlist/${idStr}`).then(res => {
        //console.log(res.body.message);
        this.carList = res.body.message;
      });
    },
    //删除一项
    removeItem(index, id) {
      this.carList.splice(index, 1);
      this.$store.commit("removeFormCar", id);
    },
    //选择框 true false 触发
    selectedChange(id, value) {
      console.log(id, value);
      this.$store.commit("updateGoodsSelected", { id: id, selected: value });
    }
  },
  components: {
    numbox
  }
};
</script>
<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      margin: 7px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
.jiesuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .red {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
