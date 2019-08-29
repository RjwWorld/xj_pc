<template>
  <div id="fixed">
    <div class="fixed-item-box">
      <div class="phone-box">17381842007</div>
      <div class="side f1">
        <div class="qq-img"></div>
        <a :href="qqLocal" target="_blank"><div class="qq-text b-text">
          <p>客服QQ</p>
        </div></a>
      </div>

      <div class="side f2">
        <div class="phone-img"></div>
        <div class="phone-text b-text">
          <p>联系我们</p>
        </div>

      </div>

      <div class="side f3">
        <div class="ding-img"></div>
        <div class="ding-text b-text" @click="goto('/callUs')">
          <p>数据定制</p>
        </div>
      </div>

      <div class="side f4">
        <div class="back-img"></div>
        <div class="back-text b-text" id="toTop" @click="toTop()">
          <p>返回顶部</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  let timer = null ;//定义初始值
  // import $ from "jquery"
  export default {
    props:{
      step:{   //此数据是控制动画快慢的
        type:Number,
        default:100
      }
    },
    data() {
      return {
        qqLocal:'http://wpa.qq.com/msgrd?v=3&uin=526172689&site=qq&menu=yes',
        isActive:false,
      }
    },
    methods: {
      goto (path) {
        this.$router.push({path:path})
      },
      // 回到顶部
      toTop() { // 动画
        timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          this.isTop = true;
          if (osTop === 0) {
            clearInterval(timer)
          }
        }, 30)
      },
    },
    created(){
      let vm =this;
      window.onscroll=function(){
        if (document.documentElement.scrollTop>0) {
          vm.isActive=true;
        }else {
          vm.isActive=false;
        }
      }
    },
    mounted:function () {
      $('.f1').mouseenter(function () {
        $('.qq-text').stop().animate({top:0})
      })
      $('.f1').mouseleave(function () {
        $('.b-text').stop().animate({top:"60px"})
      })
      $('.f2').mouseenter(function () {
        $('.phone-text').stop().animate({top:0})
        $('.phone-box').stop().css('display','block')
      })
      $('.f2').mouseleave(function () {
        $('.b-text').stop().animate({top:"60px"})
        $('.phone-box').stop().css('display','none')
      })
      $('.f3').mouseenter(function () {
        $('.ding-text').stop().animate({top:0})
      })
      $('.f3').mouseleave(function () {
        $('.b-text').stop().animate({top:"60px"})
      })
      $('.f4').mouseenter(function () {
        $('.back-text').stop().animate({top:0})
      })
      $('.f4').mouseleave(function () {
        $('.b-text').stop().animate({top:"60px"})
      })
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    #fixed{display: block}
  }
  @media screen and (max-width: 600px){
    #fixed{display: none}
  }
  #fixed{
    width: 60px;
    height: 248px;
    position: fixed;
    top: 200px;
    right: 20px;
    z-index: 1000;


  }
  /*.fixed-item-box{*/
    /*!*float: right;*!*/
    /*border: 1px solid red;*/
    /*!*margin-left: 200px;*!*/
  /*}*/
  .phone-box{
    width: 200px;
    height: 60px;
    position: fixed;
    top: 264px;
    right: 100px;
    z-index: 1001;
    background-color: #5cb4fc;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    display: none;
  }
  .side{
    width: 200px;
    height: 60px;
    position: relative;
    overflow: hidden;
    margin-bottom: 4px;
    /*border: 1px solid blue;*/
  }



  .qq-img{
    width: 60px;
    height: 60px;
    background-image: url("../../assets/images/fixed_floor_image/a1.png");
  }
  .phone-img{
    width: 60px;
    height: 60px;
    background-image: url("../../assets/images/fixed_floor_image/a2.png");
  }
  .ding-img{
    width: 60px;
    height: 60px;
    background-image: url("../../assets/images/fixed_floor_image/a3.png");
  }
  .back-img{
    width: 60px;
    height: 60px;
    background-image: url("../../assets/images/fixed_floor_image/a4.png");
  }
  .b-text{
    width: 60px;
    height: 60px;
    color: #fff;
    background-color: #5cb4fc;
    cursor: pointer;
    position: absolute;
  }
  .b-text>p{
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -15px 0 0 -15px;
  }
</style>
