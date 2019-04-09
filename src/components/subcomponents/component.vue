<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea v-model.trim="msg" placeholder="请输入要BB的内容"></textarea>
    <mt-button size="large" type="primary" @click="addComment">发表评论</mt-button>

    <div class="cmt-list">
      <!--这块不要像视频中一样:key=item.add_time会出错的 因为有重复的时间戳-->
      <div class="cmt-item" v-for="(item,i) in dataList" :key="i">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  props: ["id"],
  created() {
    this.getList();
  },
  data() {
    return {
      pageindex: 1,
      dataList: [],
      msg: "" //评论输入的数据
    };
  },

  methods: {
    getList() {
      this.$http
        .get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`)
        .then(res => {
          // console.log(res);
          if (res.body.status == 0) {
            this.dataList = this.dataList.concat(res.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getList();
    },
    addComment() {
      if (this.msg == "") {
        Toast("不可为空");
        return;
      }
      this.$http
        .post("api/postcomment/" + this.id, { content: this.msg })
        .then(res => {
          if (res.body.status == 0) {
            const newobj = {
              add_time: Date.now(),
              content: this.msg,
              user_name: "匿名用户"
            };
            this.dataList.unshift(newobj);
            this.msg = "";
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
h3 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}

.cmt-list {
  margin: 5px 0;
  .cmt-item {
    font-size: 13px;
    .cmt-title {
      line-height: 30px;
      background-color: #ccc;
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>