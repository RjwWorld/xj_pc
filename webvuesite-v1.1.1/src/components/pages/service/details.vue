<template>
  <div>
    <div class="details-img-box">
      <p class="bg-title bg-title1">为服务商提供高效精准的数据</p>
      <p class="bg-title bg-title2">
        适用于各种场景的需求，涵盖文本数据，语音数据，视频数据，图片数据等多维数据支持
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <div class="col-md-6 col-xs-12">
            <img :src="detailsArr.logo" alt="" class="details-logo">
          </div>
          <div class="col-md-6 col-xs-12">
            <p class="title title1">{{detailsArr.title}}</p>
            <p class="title details-content">{{detailsArr.introduce}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="details-box">
      <div class="d-container">
        {{detailsArr.details}}
      </div>
    </div>
    <div class="detail-item-img-container">
      <div class="row">
        <div class="container ">
          <div class="col-md-4 col-xs-6 default-image-box" v-for="(item,index) in defaultImgArr" :key="index">
            <img :src="item.img" alt="" class="default-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        detailsArr: {
          title:'语音采集',
          logo:require('../../../assets/images/service_images/c-1.jpg'),
          introduce:'视频采集中的小猪成长视频采集',
          details:'小猪成长视频按时间和大家说客户打卡机圣诞节喀什贷记卡还是贷记卡还是饥渴的和按时间快点哈数据库和大家思考和大家说客户端氨基酸客户贷记卡是的采集'
        },
        defaultImgArr:[
          {id:1,img:require('../../../assets/images/service_images/c-1.jpg')},
          {id:2,img:require('../../../assets/images/service_images/c-1.jpg')},
          {id:3,img:require('../../../assets/images/service_images/c-1.jpg')},
          {id:4,img:require('../../../assets/images/service_images/c-1.jpg')},
          {id:5,img:require('../../../assets/images/service_images/c-1.jpg')},
          {id:6,img:require('../../../assets/images/service_images/c-1.jpg')},
        ],
      }
    },
    created(){
      // axios.get('/api/v1.0/service/data/',
      //   {
      //     params:{id:this.$route.query.id}
      //   })
      //   .then(response=>{
      //     if (response.status===200){
      //       this.detailsArr=response.data;
      //     }
      //   })
      //   .catch(error=>{
      //     // console.log(error);
      //     alert('网络错误，不能访问');
      //   })
    },
  }
</script>

<style scoped>
  @media screen and (max-width:3000px) {
    .d-container {
      width: 40%;
    }
    .bg-title {
      width: 40%;
      left: 6%;
      margin-left: 0;
    }
    .bg-title1 {
      top: 38%;
      font-size: 30px;
    }
    .bg-title2 {
      top: 58%;
      font-size: 22px;
    }
  }
  @media screen and (max-width:600px){
    .d-container{
      width: 90%;
    }
    .bg-title{width: 80%;left: 50%;margin-left: -40%;}
    .bg-title1{
      top: 40%;
      font-size: 30px;
    }
    .bg-title2{
      top: 60%;
      font-size: 22px;
    }
  }
  .col-md-12,.col-xs-12,.col-xs-12,.col-md-6,.col-xs-6{
    padding: 0;
  }
  .row{margin: 0}
  .details-img-box{
    position: relative;
    width: 100%;
    height: 600px;
    background: url("../../../assets/images/service_images/details-banner.png") no-repeat center;
  }
  .bg-title{
    color: #fff;
    position: absolute;
  }
  .details-logo{
    width: 100%;
  }
  .title1{
    height: 30px;
    font-size: 20px;
    border-left: 4px solid #5cb4fc;
    text-indent: 20px;
    line-height: 30px;
  }
  .details-content{
    font-size: 16px;
    text-indent: 20px;
  }
  .title{
    margin-top: 20px;
    margin-left: 20px;
  }
  .details-box{
    width: 100%;
    text-align: center;
    background-color: #e5f3ff;
    margin-top: 40px;
    font-size: 20px;
    padding: 40px 0;
  }
  .d-container{
    margin: auto;
  }
  .detail-item-img-container{margin: 30px 0}
  .default-image-box{margin-bottom: 15px}
  .default-image{width: 95%;}
</style>
