<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in DataList" :key="item.id">
        <router-link :to="`/home/newsInfo/`+item.id">
          <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time|dateFormat}}</span>
              <span>点击次数:{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      DataList: []
    };
  },
  methods: {
    getNewList() {
      this.$http.get("api/getnewslist").then(function(res) {
        if (res.body.status == 0) {
          this.DataList = res.body.message;
        } else {
          Toast("失败");
        }
      });
    }
  },
  created() {
    this.getNewList();
  }
};
</script>
<style lang="scss" scoped>
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
}
</style>