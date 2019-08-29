<template>
  <div>
    <aboutUsBanner></aboutUsBanner>
    <p class="fl-title">公司介绍</p>
    <aboutUsF1></aboutUsF1>
    <p class="fl-title">行业动态</p>
    <aboutUsF2></aboutUsF2>
    <p class="fl-title">加入我们</p>
    <aboutUsF3></aboutUsF3>
    <p class="fl-title">公司地址</p>
    <aboutUsF4></aboutUsF4>
    <div class="footer-box">
      <div class="data-btn" @click="goto('/callUs')">
        <span>数</span>
        <span>据</span>
        <span>定</span>
        <span>制</span>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import aboutUsBanner from '../components/pages/about_us/about_us_banner'
  import aboutUsF1 from '../components/pages/about_us/about_us_f1'
  import aboutUsF2 from '../components/pages/about_us/about_us_f2'
  import aboutUsF3 from '../components/pages/about_us/about_us_f3'
  import aboutUsF4 from '../components/pages/about_us/about_us_f4'
  export default {
    components:{aboutUsBanner,aboutUsF1,aboutUsF2,aboutUsF3,aboutUsF4},
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  .fl-title{
    font-size: 20px;
    text-align: center;
    margin: 40px 0;
  }
  .footer-box{
    width: 100%;
    background: url("../assets/images/about_images/BANNER2.png") no-repeat center;
    height: 126px;
    padding-top: 41px;
  }
  .data-btn{
    width: 180px;
    height: 44px;
    border-radius: 10px;
    border: solid 2px #ffffff;
    margin: 0 auto;
    text-align: center;
    line-height: 38px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    position: relative;
  }
  .data-btn>span{
    transition: all 0.2s;
    position: absolute;
  }
  .data-btn>span:nth-child(1){left: 30px;top:0px}
  .data-btn>span:nth-child(2){left: 60px;top:0px}
  .data-btn>span:nth-child(3){left: 90px;top:0px}
  .data-btn>span:nth-child(4){left: 120px;top:0px}
  .data-btn>span:nth-child(1):hover{top: 6px;left: 36px;}
  .data-btn>span:nth-child(2):hover{top: 6px;left: 66px;}
  .data-btn>span:nth-child(3):hover{top: 6px;left: 96px;}
  .data-btn>span:nth-child(4):hover{top: 6px;left: 126px;}
</style>
