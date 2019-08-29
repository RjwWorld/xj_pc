<template>
  <div>
    <aboutUsBanner></aboutUsBanner>
    <p class="news-title">{{newsDetails.title}}</p>
    <p class="title-line"></p>
    <div class="news-date-from">
      <p class="news-date lf">{{newsDetails.publish}}</p>
      <p class="news-from rt">来源 ：{{newsDetails.article_from}}</p>
    </div>
    <div class="container"  style="padding: 40px 0">
      <p class="p-style" v-html="newsDetails.body"></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import aboutUsBanner from '../about_us/about_us_banner'
  export default {
    components:{aboutUsBanner},
    data() {
      return {
        newsDetails: {
          title:'全球首个“AI合成主播”上岗，为什么这些人会感到恐慌？',
          publish:'2018-11-08',
          article_from:' 百家号',
          body:''
        }

      }
    },
    created(){
      this.getInfo()
    },
    methods: {
      getInfo(){
        axios.get('/api/v1.0/article/articleBody/',{params:{id:this.$route.query.id}})
          .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data))
            this.newsDetails=response.data;
            alert(this.newsTitleArr.length)
          })
          .catch(error=>{
            if (error && error.response){
              this.errorstatus(error)
            }
          })
      }
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    .title-line{width: 40%}
    .news-date-from{width: 20%;}
  }
  @media screen and (max-width: 600px){
    .title-line{width: 70%}
    .news-date-from{width: 60%;}
  }
  .news-title{
    text-align: center;
    font-size: 24px;
    margin-top: 30px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .title-line{
    margin: 0 auto;
    margin-top: 20px;
    height: 3px;
    background-color: #5cb4fc;
  }
  .news-date-from{
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 16px;
  }
  .p-style{
    width: 100%;
    text-indent: 2em;
    font-size: 16px;
  }
  .p-style>>>p{margin-bottom: 20px}
  .p-style>>>h4{font-weight: bold;margin: 20px;}
</style>
