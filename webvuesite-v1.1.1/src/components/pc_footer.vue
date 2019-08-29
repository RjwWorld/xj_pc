<template>
  <div class="pc-footer">
    <div class="container">
      <div class="row ft-box">
        <div class="col-md-2"></div>
        <div class="col-md-1 col-xs-3 footer-1-box" v-for="(item,index) in footer1Arr" :key="index"
          @click="goto(item.path)">
          {{item.name}}
        </div>
        <div class="col-md-3 col-xs-6 footer-2-box" v-for="(item,index) in footer2Arr" :key="index+'-label'">
          <img :src="item.icon" alt="" class="footer-icon lf">
          <div class="txt-box rt">
            <p class="name">{{item.name}}</p>
            <p class="num">{{item.num}}</p>
          </div>
        </div>
      </div>
      <p class="bei-an">版权所有 © 2018-2030 成都市向己科技有限公司 川ICP备09089247号-1 川公网安备 31011202002080号</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        footer1Arr:[
          {id:1,path:'/serviceContract',name:'服务协议'},
          {id:2,path:'/privacyContract',name:'隐私声明'},
          {id:3,path:'/legalNotice',name:'法律声明'},
          {id:4,path:'/aboutUs',name:'关于我们'},
        ],
        footer2Arr:[
          {
            id:1,
            icon:require('../assets/images/pc_footer/phone_icon.png'),
            name:'咨询电话 ：',
            num:'17381842007'
          },
          {
            id:2,
            icon:require('../assets/images/pc_footer/qq_icon.png'),
            name:'客服QQ ：',
            num:'12345678210'
          }
        ],
      }
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    .footer-2-box{padding: 0 40px;text-align: left!important;}
    .txt-box{margin-right: 66px;}
    .footer-icon{margin-left: 40px;}
    .ft-box{
      padding: 30px 0;
      margin-top: 60px;
    }
    .footer-1-box{margin: 20px 0 ;cursor: pointer}
  }
  @media screen and (max-width: 600px){
    .footer-2-box{padding: 0;text-align: center!important;}
    .txt-box{margin-right: 17%;}
    .footer-icon{margin-left: 30%;}
    .ft-box{
      padding: 0;
      margin-top: 0;
    }
    .footer-1-box{margin: 30px 0;cursor: pointer}
  }
  .col-xs-4,.col-md-1,.col-xs-6{padding: 0;}
  .pc-footer{
    width: 100%;
    background-color: #0f0f0f;
    height: 100%;
  }

  .ft-box>div{
    color: #fff;
    text-align: center;
    font-size: 16px;
  }

  .bei-an{text-align: center;color: #fff}
  .footer-icon{
    width: 60px;
    height: 60px;
  }
  .txt-box{
    line-height: 30px;
    letter-spacing: 2px;
  }

</style>
