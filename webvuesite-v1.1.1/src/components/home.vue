<template>
  <div>
    <div class="site-container">
      <video :src="bannerMp4" autoplay loop  :muted="true" class="bannerMp4">
        您的浏览器不支持 video 标签。
      </video>
      <div class="home-bg-img">
        <div class="img-responsive banner-btn" @click="goto('/callUs')">开启菁准数据</div>
        <div class="home-txt1 home-txt">菁准数据</div>
        <div class="home-line"></div>
        <div class="home-txt2 home-txt">为优质的数据集而生</div>
      </div>
    </div>
    <homeFloor></homeFloor>
  </div>
</template>

<script>
  import homeFloor from '../components/pages/home/home_floor'
  export default {
    components:{
      homeFloor
    },
    data() {
      return {
        homeBannerImg:require('../assets/images/home_images/banner.jpg'),
        bannerBtn:require('../assets/images/home_images/banner-btn.png'),
        bannerMp4:require('../assets/images/home_images/banner.mp4')
      }
    },
  }
</script>

<style scoped>


  @media screen and (max-width:3000px){
    .bannerMp4{
      display: block;
      width: 100%;
      margin-top: -90px;
    }
    .home-bg-img{
      display: none;
    }
  }
  @media screen and (max-width:600px){
    .bannerMp4{
      display: none;
    }
    .home-bg-img{
      display: block;
      width: 100%;
      height: 650px;
      background: url("../assets/images/home_images/moble-banner.png") no-repeat center top;
      position: relative;
    }
    .banner-btn{
      width: 160px;
      height: 60px;
      position: absolute;
      bottom: 20%;
      left: 50%;
      margin-left: -80px;
      border: 2px solid #fff;
      border-radius: 20px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      font-size: 20px;
    }
    .home-txt{
      width: 100%;
      font-size: 38px;
      color: #fff;
      text-align: center;
      position: absolute;
      font-weight: bold;
    }
    .home-txt1{
      top: 20%;
    }
    .home-txt2{
      top: 35%;
      font-size: 40px;
    }
    .home-line{
      position: absolute;
      width: 50%;
      height: 4px;
      top: 30%;
      left: 50%;
      margin-left: -25%;
      background-color: #fff;
    }
  }
</style>
