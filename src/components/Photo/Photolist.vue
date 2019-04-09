<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item"
            :class="{'mui-active':item.id==0}"
            data-wid="tab-top-subpage-1.html"
            v-for="item in cateList"
            :key="item.id"
            @click="getList(item.id)"
          >{{item.title}}</a>

          <!--<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
          </a>-->
        </div>
      </div>
    </div>
    <!-- 图片内容 -->
    <ul class="list">
      <router-link tag="li" :to="'/home/photoInfo/'+item.id" v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h3 class="info-title">{{item.title}}</h3>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getCategory();
    this.getList(0);
  },
  data() {
    return {
      cateList: [],
      list: []
    };
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status == 0) {
          this.cateList = [{ title: "全部", id: 0 }, ...res.body.message];
        }
      });
    },
    getList(id) {
      this.$http.get(`api/getimages/${id}`).then(res => {
        //console.log(res.body.message);
        if (res.body.status == 0) {
          this.list = res.body.message;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  background: gray;
  list-style: none;
  padding: 0px;
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  li {
    position: relative;
    color: white;
    margin-bottom: 1px;
    img {
      width: 100%;
    }
    .info {
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>