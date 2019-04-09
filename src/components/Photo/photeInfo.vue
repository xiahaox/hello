<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
      <div v-html="photoinfo.content"></div>
    </p>

    <hr>
    <!-- 缩略图区域 -->
      <vue-preview :slides="imgsList"></vue-preview>
    <!-- 图片内容区域 -->
    <div class="content"></div>
    <!-- 放置一个现成的评论子组件 -->
    <commentsArea :id="id"></commentsArea>
  </div>
</template>
<script>
import component from "../subcomponents/component.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: "",
      imgsList:'',//缩略图
     
    };
  },
  methods: {
    getPhoteInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        //console.log(result.body.message[0]);
        if (result.body.status == 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getImgs(){ //获取缩略图数据
      this.$http.get('api/getthumimages/'+this.id).then(res=>{
          //console.log(res.body.message);
          this.imgsList=res.body.message
          res.body.message.forEach(element => {
              console.log(element);
              element.msrc=element.src;
              element.w=600;
              element.h=400;
              element.alt="picture"
              
          });
          this.imgsList=res.body.message
          console.log( this.imgsList);
          
      })
    }
  },
  created() {
    this.getPhoteInfo();
    this.getImgs()
  },
  components: {
    commentsArea: component
  }
};
</script>
<style lang="scss" scoped>
[itemscope="itemscope"]{
  display:flex;
  width:100%;
  figure{
    flex:1;
    img{
      width:100%;
    }
  }
}


</style>