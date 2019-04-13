<template>
  <div class="container">
    <h3 v-html="goodsInfo.title"></h3>
    <div class="article" v-html="goodsInfo.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   id: this.$route.params.id
      goodsInfo: {}
    };
  },
  methods: {
    getGoodsDesc() {
      this.$http
        .get(`api/goods/getdesc/${this.$route.params.id}`)
        .then(result => {
          if (result.body.status == 0) {
            this.goodsInfo = result.body.message[0];
          }
        });
    }
  },
  created() {
    this.getGoodsDesc();
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 4px;
  h3 {
    font-size: 16px;
  }
}
</style>
<style lang="scss">
.article {
  img {
    width: 100%;
  }
}
</style>