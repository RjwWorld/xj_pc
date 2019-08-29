<template>
  <div class="service-container">
    <serviceBanner></serviceBanner>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xs-12 ser-box" v-for="(item,index) in serviceArr" :key="index">
          <div class="col-md-6 col-xs-12 ser-box-left" :class="{push6:index===1}">
            <p class="ser-title">{{item.title}}</p>
            <p class="ser-content">{{item.serText}}</p>
            <button class="button-three" @click="timeOutGo(item.type_id)"><span>了解更多</span></button>
          </div>
          <div class="col-md-6 col-xs-12 ser-box-right" :class="{pull6:index===1}">
            <img :src="item.serImg" alt="" class="ser-img">
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import serviceBanner from '../components/pages/service/service_banner'
  export default {
    components:{serviceBanner},
    data() {
      return {
        serviceBannerImg: require('../assets/images/service_images/banner.jpg'),
        serviceArr:[
          {
            type_id:2,
            title:'数据采集',
            serImg:require('../assets/images/service_images/ser_1-1-1.jpg'),
            serText:'数据采集分为人工采集和互联网技术采集，采集种类很多，包括图片采集、语音采集、视频采集、文本采集等，采集下来的统称为数据，机器学习需要大量的数据来训练，采大量相关的数据进行精准的标注才能让机器认识, 训练出质量好的AI。'
          },
          {
            type_id:1,
            title:'数据标注',
            serImg:require('../assets/images/service_images/ser_1-1-2.jpg'),
            serText:'数据标注种类繁多，如分类、拉框、注释、标记我们小时候学习认识苹果的时候需要别人告诉我们这是苹果，从此以后我们不管在什么场景见到苹果都能认识，类比机器学习，机器通过学习了无数张苹果图片中的特征，直到它可以自行识别苹果。'
          },
          {
            type_id:3,
            title:'数据质检',
            serImg:require('../assets/images/service_images/ser_1-1-3.jpg'),
            serText:'已标注完成的数据集，并不一定完全符合要求的质量，这时候需要对这些数据集进行一个质量审查，合格的数据进入产品验收，不合格的数据会被筛选掉，进行重新标注直到符合质量要求，进入产品验收的数据这边会做一个二次交叉质检，确保数据全部达到合格水平。'
          },
        ],
      }
    },
    methods: {
      goService(type_id){
        this.$router.push({
          path:'/service/collection',
          query:{
            type_id:type_id
          }
        })
      },
      timeOutGo(type_id){
        let _this = this;
        setTimeout(function () {
          _this.goService(type_id)
        },800)
      }
    },
  }
</script>

<style scoped>
  @media screen and (max-width:3000px){
    .ser-box{margin-top: 118px}
    button{
      color:#fff;
      text-align: center;
      margin-top: 60px;
      margin-left: 22%;
    }
    .ser-box-right{
      margin-top: 0;
      overflow: hidden;
    }
    /*列偏移*/
    .push6{left: 50%;}
    .pull6{right: 50%;}
  }
  @media screen and (max-width:600px){
    .ser-box{margin-top: 50px}
    .ser-box-right{
      margin-top: 70px;
    }
    button{
      color:#fff;
      text-align: center;
      margin-top: 20px;
      margin-left: 0;
    }
    /*列偏移*/
    .push6{
      left: 0;
    }
    .pull6{
      right: 0;
    }

  }


  .container{
    margin-bottom: 50px;
  }
  .service-container{
    width: 100%;
  }
  .ser-img{
    width: 100%;
    transition: all 3s;
  }
  .ser-img:hover{
    transform: scale(1.2,1.2);
  }
  .ser-title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 1em;
    border-left: 6px solid #5cb4fc;
    font-size: 20px;
  }
  .ser-content{
    margin-top: 10px;
    font-size: 18px;
    line-height: 38px;
    text-indent: 2em;
  }
  .ser-box-left{
    position: relative;
    /*padding-bottom: 12%;*/
  }
  .button-three {
    position: relative;
    font-size: 20px;
    letter-spacing: 3px;
    background-color: #5cb4fc;
    border: none;
    padding: 13px;
    width: 170px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    /*border-radius: 15px;*/
  }
  .button-three:hover{
    background:#fff;
    box-shadow:0px 2px 10px 5px #97B1BF;
    color:#5cb4fc;
  }
  .button-three:after {
    content: "";
    background: #5cb4fc;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  .button-three:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
  /*列排序*/

</style>
