<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <div class="content" v-html="newsinfo.content"></div>
    <component-box></component-box>
  </div>
</template>
<script>
//导入子组件
import component from "../subcomponents/component.vue";

export default {
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        console.log(res);
        this.newsinfo = res.body.message[0];
      });
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  components: {
    "component-box": component
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
<style lang="scss">
.newsinfo-container {
  .content {
    img {
      width: 100%;
    }
  }
}
</style>