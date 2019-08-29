<template>
  <div>
    <!--1楼-->
    <floorTitle :title="floorTitle.title1"></floorTitle>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-6 f1-box" v-for="(item,index) in floor1Arr" :key="index">
          <img :src="item.f1Img" alt="" class="f1-img">
          <p class="f1-title-txt">{{item.title}}</p>
          <p class="f1-content-txt">{{item.content1}}</p>
          <p class="f1-content-txt">{{item.content2}}</p>
        </div>
      </div>
    </div>
    <!--2楼-->
    <div class="f2-container">
      <div class="none-box"></div>
      <floorTitle :title="floorTitle.title2"></floorTitle>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-12 f2-box" v-for="(item,index) in floor2Arr" :key="index"
              @mouseenter="f2Enter(item.id)">
              <div class="col-md-4 col-xs-12 top-box" :class="{entertop:enter===item.id}">
                <img :src="item.f2Img" alt="" class="f2-img">
                <p class="f2-item-title">{{item.title}}</p>
              </div>
              <div class="col-md-4 col-xs-12 bottom-box" :class="{enterbottom:enter===item.id}">
                <div class="f2-content" :class="{enterbottomtxt:enter===item.id }">
                  {{item.content}}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!--3楼-->
    <floorTitle :title="floorTitle.title3"></floorTitle>
    <div class="f3-container">
      <div class="container" style="margin-bottom: 40px;">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="f3-left">
              <span class="t1">菁准数据一站式数据服务</span>
              <img :src="f3Icon" alt="" class="t1-icon">
              <div class="f3-left-content">
                <p v-for="(item,index) in f3LeftArr" :key="index" class="content-items">
                  <span class="radio-box">{{item.id}}</span>
                  <span class="item-content">{{item.content}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <img :src="f3Img" alt="" class="f3img">
          </div>
        </div>
      </div>
    </div>
    <!--4楼-->
    <floorTitle :title="floorTitle.title4"></floorTitle>
    <div class="f4-container">
      <div class="row">
        <div class="col-md-3 col-xs-12 f4-box" v-for="(item,index) in f4FloorArr" :key="index">
          <img :src="item.f4Img" alt="" class="f4-box-img">
          <img :src="item.icon" alt="" class="f4-icon f4-icon1">
          <p class="f4-line"></p>
          <p class="item-name">{{item.name}}</p>
          <p class="f4-item-content">{{item.f4Content}}</p>
          <p class="more-btn" @click="goMoreData(item.id)">查看更多</p>
          <div class="done-box"></div>
        </div>
      </div>
    </div>
    <!--5楼-->
    <floorTitle :title="floorTitle.title5"></floorTitle>
    <div class="f5-container">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <p class="f5-txt f5-txt-1">菁准数据自主研发的菁准数据标注平台</p>
          <p class="f5-txt f5-txt-2">让菁准更精准，让标注更简单</p>
          <div class="f5-open-btn" @click="goAnnotation()">
            <span>开</span>
            <span>启</span>
            <span>菁</span>
            <span>准</span>
            <span>标</span>
            <span>注</span>
          </div>

          <!--<img :src="f5OpenBtn" alt="" class="f5-open-btn" @click="goto('/callUs')">-->
        </div>
      </div>
    </div>
    <!--6楼-->
    <div class="f6-container">
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <floorTitle :title="floorTitle.title6" class="f6-left-box"></floorTitle>
        </div>
        <div class="col-md-8 col-xs-12 col-style">
          <div class="row f6-right-box">
            <div class="col-md-2 col-xs-2" v-for="(item,index) in f6IconArr" :key="index"
             :class="{pianleft:index<=2||index>=4}">
              <img :src="item.icon" alt="" class="f6-icon">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--7楼-->
    <div class="f7-container">
      <floorTitle :title="floorTitle.title7"></floorTitle>
      <!--moble-->
      <van-swipe :autoplay="3000" indicator-color="#5cb4fc" class="f7-swipe-mo-box">
        <van-swipe-item v-for="(item,index) in f7SwipwArr" :key="index">
          <img :src="item.img" alt="" class="f7-swipe-mo" @click="goNewsDetails(item.id)">
          <p class="news-title-mo">{{item.title}}</p>
          <div class="know-more-btn-mo" @click="goNewsDetails(item.id)">了解更多</div>
        </van-swipe-item>
      </van-swipe>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!--pc-->
            <el-carousel :interval="4000" type="card" class="swipe-box">
              <el-carousel-item v-for="(item,index) in f7SwipwArr" :key="index">
                <img :src="item.img" alt="" class="swipe-img">
                <div class="know-more-btn" @click="goNewsDetails(item.id)">了解更多</div>
                <div class="f7-line"></div>
                <p class="news-title">{{item.title}}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import floorTitle from '../../../components/pages/home/floor_title'
  export default {
    components:{
      floorTitle
    },
    data() {
      return {
        enter:1,
        floorTitle:{
          title1:'我们的优势',
          title2:'产品服务',
          title3:'服务流程',
          title4:'免费数据',
          title5:'标注平台',
          title6:'为他们服务',
          title7:'行业动态',
        },
        floor1Arr:[
          {title:'更专业',f1Img:require('../../../assets/images/home_images/f1-1.png'),content1:'上百位数据专家全天侯',content2:'制成最菁准的数据集'},
          {title:'更安全',f1Img:require('../../../assets/images/home_images/f1-2.png'),content1:'上百位数据专家全天侯',content2:'制成最菁准的数据集'},
          {title:'更精准',f1Img:require('../../../assets/images/home_images/f1-3.png'),content1:'上百位数据专家全天侯',content2:'制成最菁准的数据集'},
          {title:'更省时',f1Img:require('../../../assets/images/home_images/f1-4.png'),content1:'上百位数据专家全天侯',content2:'制成最菁准的数据集'},
          {title:'更优惠',f1Img:require('../../../assets/images/home_images/f1-5.png'),content1:'上百位数据专家全天侯',content2:'制成最菁准的数据集'},
          {title:'更快捷',f1Img:require('../../../assets/images/home_images/f1-6.png'),content1:'上百位数据专家全天侯',content2:'制成最菁准的数据集'},
        ],
        floor2Arr:[
          {
            f2Img:require('../../../assets/images/home_images/f2-1-1.png'),
            title:'数据采集',
            id:1,
            content:'分为人工采集和互联网技术采集，采集种类很多，包括图片采集、语音采集、视频采集、文本采集等。'
          },
          {f2Img:require('../../../assets/images/home_images/f2-1-2.png'),
            title:'数据标注',
            id:2,
            content:'数据标注:对采集完成的数据进行相应的加工处理，处理方式有分类、画框、注释、标记等。标注完成后的数据集可供模型训练。'
          },
          {f2Img:require('../../../assets/images/home_images/f2-1-3.png'),
            title:'数据质检',
            id:3,
            content:'已完成的数据集进行一个质量审查，不合格的数据会被筛选掉，进行重新标注直到符合质量要求。'
          },
        ],
        f3Img:require('../../../assets/images/home_images/f2-9.png'),
        f3Icon:require('../../../assets/images/home_images/f3-5.png'),
        f3LeftArr:[
          {id:1,content:'菁准数据自主研发的专业的数据标注平台，更快速、有效的解决AI企业数据的处理问题。'},
          {id:2,content:'让数据标注人员、质检人员、管理人员相辅相成，更有质量的完成任务。'},
          {id:3,content:'AI企业能直接进入平台把控整个任务的进度。'},
          {id:4,content:'多次专业的质检，确保我们的数据更精准，更有效。'},
        ],
        f4FloorArr:[
          {
            id:1,
            icon:require('../../../assets/images/home_images/voice_icon.png'),
            name:'语音数据',
            f4Img:require('../../../assets/images/home_images/4_pic.png'),
            f4Content:'NLP（中文自动分词、语义分析、情感判断、意图识别、机器翻译、等)。'
          },
          {
            id:2,
            icon:require('../../../assets/images/home_images/text_icon.png'),
            name:'文本数据',
            f4Img:require('../../../assets/images/home_images/5_pic.png'),
            f4Content:'NLP（中文自动分词、语义分析、情感判断、意图识别、机器翻译、等)。'
          },
          {
            id:3,
            icon:require('../../../assets/images/home_images/image_icon.png'),
            name:'图像数据',
            f4Img:require('../../../assets/images/home_images/6_pic.png'),
            f4Content:'NLP（中文自动分词、语义分析、情感判断、意图识别、机器翻译、等)。'
          },
          {
            id:4,
            icon:require('../../../assets/images/home_images/video_icon.png'),
            name:'视频数据',
            f4Img:require('../../../assets/images/home_images/7_pic.png'),
            f4Content:'NLP（中文自动分词、语义分析、情感判断、意图识别、机器翻译、等)。'
          }
        ],
        f4Show:1,
        f5Img:require('../../../assets/images/home_images/f4.png'),
        f5OpenBtn:require('../../../assets/images/home_images/f4-1.png'),
        f6IconArr:[
          {id:1,icon:require('../../../assets/images/home_images/f6-icon/logo (1).png')},
          {id:2,icon:require('../../../assets/images/home_images/f6-icon/logo (2).png')},
          {id:3,icon:require('../../../assets/images/home_images/f6-icon/logo (3).png')},
          {id:4,icon:require('../../../assets/images/home_images/f6-icon/logo (4).png')},
          {id:5,icon:require('../../../assets/images/home_images/f6-icon/logo (5).png')},
          {id:6,icon:require('../../../assets/images/home_images/f6-icon/logo (6).png')},
          {id:7,icon:require('../../../assets/images/home_images/f6-icon/logo (7).png')},
          {id:8,icon:require('../../../assets/images/home_images/f6-icon/logo (8).png')},
          {id:9,icon:require('../../../assets/images/home_images/f6-icon/logo (9).png')},
        ],
        f7SwipwArr:[
          {
            id:1,
            img:require('../../../assets/images/home_images/swipe1.png'),
            title:'特稿：迎接“新智能时代”——2018人工智能大发展'
          },
          {
            id:2,
            img:require('../../../assets/images/home_images/swipe2.png'),
            title:'特稿：迎接“新智能时代”——2018人工智能大发展'
          },
          {
            id:3,
            img:require('../../../assets/images/home_images/swipe3.png'),
            title:'特稿：迎接“新智能时代”——2018人工智能大发展'
          }
        ],
      }
    },
    created(){
      // axios.get('/api/v1.0/article/articleTitle/').then(response=>{
      //     if (response.status===200){
      //       this.f7SwipwArr=response.data;
      //     }
      // }).catch(error=>{
      //   console.log(1);
      // })
    },
    methods: {
      f2Enter(id) {
        this.enter=id
      },
      // 新闻详情页
      goNewsDetails(id){
        this.$router.push({
          path:'/newsDetails',
          query:{
            id:id
          }
        })
      },
      // 免费数据跳转
      goMoreData(id){
        this.$router.push({
          path:'/sampleData/moreData/',
          query:{
            id:id
          }
        })
      },
      //跳到平台
      goAnnotation(){
        top.location.href="http://www.jzsjfw.com:8890/#/"
      }
    },

  }
</script>

<style scoped>
  @import "../../../assets/css/my-keyframes.css";
  .container{
    /*background-color: #ffff;*/
    /*border: 1px solid red;*/
    margin-bottom: 80px;
  }
  .f1-img{
    width: 65px;
    height: 65px;
    vertical-align: bottom;
  }
  .f1-box{
    text-align: center;
    font-size: 16px;
    margin: 20px 0;
  }
  .f1-title-txt{
    margin-left: 8px;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
  }

  /*2楼*/
  .f2-container{
    width: 100%;
    margin-top: 30px;
    background-color: #f2f2f2!important;
    /*height: 9rem;*/
    padding-bottom: 120px;
    background-image: url("../../../assets/images/home_images/f2bgimg.png");
    background-size: cover;
    z-index: 0;
  }
  .top-box{
    width: 100%;
    height: 255px;
    background-color: #303030;
    text-align: center;
  }
  .bottom-box{
    width: 100%;
    height: 332px;
    background-color: #4e4e4e;
    opacity: 0.9;
  }
  .f2-content{
    width: 80%;
    margin: auto;
    margin-top: 50px;
    /*border: 0.01rem solid red;*/
    letter-spacing: 2px;
    color: #fff;
    font-size: 20px;
    line-height: 36px;
  }
  .col-md-4{
    padding: 0;
  }
  .f2-box{
    /*border-right: 1px solid red;*/
    transition: all 1s;
  }
  .f2-img{
    width: 60px;
    height: 70px;
    margin-top: 70px;
  }
  .f2-item-title{
    font-size: 20px;
    margin-top: 48px;
    color: #fff;
  }
  /*鼠标移入效果*/
  .entertop{
    background-color: #5cb4fc;
  }
  .enterbottom{
    background-color: #fff;
  }
  .enterbottomtxt{
    color: #434343;
    font-family: "Microsoft Himalaya";
  }
  /*3楼*/
  .f3-container{
    background-color: #fff;
    margin: auto;
  }
  .f3img{
    width: 100%;
    height: 100%;
    margin: 100px 0 100px 0;
  }
  .f3-left{
    text-align: center;
    margin-top: 170px;
  }
  .t1{
    font-size: 22px;
  }
  .t1-icon{
    margin-top: -20px;
  }
  .f3-left-content{
    width: 100%;
    margin: 30px auto;
    text-align: left;
  }
  .content-items{
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 22px;
    margin-top: 30px;
  }
  .radio-box{
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #434343;
    line-height: 22px;
    color: #fff;
    text-align: center;
    font-size: 14px;
  }


  /*4楼*/
  .f4-container{
    width: 100%;

  }
  .col-md-3{
    padding: 0;
    margin: 0;
  }
  .f4-container>.row{
    margin: 0;
    padding: 0;
  }
  .f4-box-img{
    width: 100%;
  }
  .f4-box{
    /*width: 100%;*/
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  /*4楼动画效果*/
  .f4-box:hover .f4-icon
  {
    /*-webkit-animation: f4-icon-change 1s  1 alternate forwards;*/
    top: 20%;
  }
  .f4-box:hover .f4-line
  {
    top: 40%;
  }
  .f4-box:hover .f4-item-content
  {
    top: 60%;
  }
  .f4-box:hover .item-name
  {
    top: 44%;
  }

  .f4-box:hover .done-box
  {
    opacity: 0.8;
  }
  .f4-box:hover .more-btn
  {
    /*-webkit-animation: f4-more-btn-change 1s  1 alternate forwards;*/
    bottom: 10%;
  }
  /*4楼小图标*/
  .f4-icon{
    position: absolute;
    left: 50%;
    top: 34%;
    margin-left: -32px;
    z-index: 50;
    transition: all 1s;
  }
  .f4-container>.row>.f4-box:first-child>.f4-icon{
    margin-left: -20px;
  }
  /*4楼线*/
  .f4-line{
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    top: 52%;
    z-index: 50;
    transition: all 1s;
  }
  /*4楼item-name*/
  .item-name{
    position: absolute;
    left: 50%;
    color: #fff;
    font-size: 24px;
    margin-left: -48px;
    top: 62%;
    z-index: 50;
    transition: all 1s;
  }
  /*遮罩内容*/
  .f4-item-content{
    width: 80%;
    position: absolute;
    top: 110%;
    left: 50%;
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-left: -40%;
    z-index: 50;
    transition: all 1s;
  }
  .more-btn{
    position: absolute;
    bottom: -10%;
    left: 50%;
    width: 34%;
    height: 40px;
    margin-left: -17%;
    border: 1px solid #fff;
    text-align: center;
    color: #fff;
    line-height: 40px;
    font-size: 18px;
    cursor: pointer;
    z-index: 50;
    transition: all 1s;
  }
  .more-btn:hover{
    background-color: #fff;
    color: #5cb4fc;
    z-index: 50;
  }
  .done-box{
    width: 100%;
    height: 0;
    padding-top: 130%;
    position: absolute;
    background-color: #5cb4fc;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 20;
    transition: all 1s;
  }


  /*5楼*/
  .f5-container{
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background: url("../../../assets/images/home_images/f5.png") no-repeat center;
    position: relative;
  }
  .f5-container>.row{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .f5-container>.row>.col-md-12,.f5-container>.row>.col-xs-12{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .f5-txt{
    color: #fff;
    position: absolute;
    left: 50%;
    width: 92%;
    margin-left: -46%;
    text-align: center;
  }
  .f5-txt-1{
    font-size: 32px;
    letter-spacing: 1px;
    top: 26%;
  }
  .f5-txt-2{
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: bold;
    top: 50%;
  }

  .f5-open-btn{
    position: absolute;
    cursor: pointer;
    width: 176px;
    height: 50px;
    bottom: 8%;
    left: 50%;
    margin-left: -88px;
    border: 2px solid #5cb4fc;
    color: #fff;
    border-radius: 5px;
  }
  .f5-open-btn{
    -webkit-animation: open-btn-border-change 1s linear 1s infinite alternate;
  }
  .f5-open-btn>span{
    float: left;
    position: relative;
    margin-left: 7px;
    font-size: 20px;
    line-height: 44px;
  }
  .f5-open-btn:hover>span:nth-child(1){
    -webkit-animation:open-btn-hover-change 1s linear 0s infinite alternate;
  }
  .f5-open-btn:hover>span:nth-child(2){
    -webkit-animation:open-btn-hover-change 1s linear 0.2s infinite alternate;
  }
  .f5-open-btn:hover>span:nth-child(3){
    -webkit-animation:open-btn-hover-change 1s linear 0.4s infinite alternate;
  }
  .f5-open-btn:hover>span:nth-child(4){
    -webkit-animation:open-btn-hover-change 1s linear 0.6s infinite alternate;
  }
  .f5-open-btn:hover>span:nth-child(5){
    -webkit-animation:open-btn-hover-change 1s linear 0.8s infinite alternate;
  }
  .f5-open-btn:hover>span:nth-child(6){
    -webkit-animation:open-btn-hover-change 1s linear 1s infinite alternate;
  }

  .f5-open-btn>span:nth-child(1){
    -webkit-animation:open-btn-change 1s linear 0s infinite alternate;
  }
  .f5-open-btn>span:nth-child(2){
    -webkit-animation:open-btn-change 1s linear 0.2s infinite alternate;
  }
  .f5-open-btn>span:nth-child(3){
    -webkit-animation:open-btn-change 1s linear 0.4s infinite alternate;
  }
  .f5-open-btn>span:nth-child(4){
    -webkit-animation:open-btn-change 1s linear 0.6s infinite alternate;
  }
  .f5-open-btn>span:nth-child(5){
    -webkit-animation:open-btn-change 1s linear 0.8s infinite alternate;
  }
  .f5-open-btn>span:nth-child(6){
    -webkit-animation:open-btn-change 1s linear 1s infinite alternate;
  }

  .f5-open-btn:hover{

  }
  /*6楼*/
  .f6-container>.row{
    padding: 0;
    margin: 0;
  }
  /*大屏幕*/
  @media screen and (max-width:3000px){
    .f6-left-box{
      height: 0;
      padding-top: 50%;
    }
    .f6-right-box{
      width: 100%;
      height: 700px;
      padding-top: 10%;
      margin: 0;
    }
    /*7楼*/
    .f7-container{
      width: 100%;
      background: #fff;
      height: 560px;
      padding-top: 1px;
    }
    .f7-swipe-mo-box{
      display: none;
    }
  }
  /*移动端*/
  @media screen and (max-width:600px){
    .f6-left-box{
      height: 0;
      padding-top: 0;
    }
    .f6-right-box{
      width: 100%;
      height: 300px;
      padding-top: 10%;
      margin: 0;
    }
    /*7楼*/
    .f7-container{
      width: 100%;
      background: #fff;
      height: 490px;
      padding-top: 20px;
    }
    .swipe-box{display: none}
    .f7-swipe-mo-box{
      display: block;
    }
    .f4-box{
      margin-top: 20px;
    }
    .f2-box{
      margin-top: 20px;
    }
  }

  .col-style{
    margin: 0;
    padding: 0;
  }

  .f6-right-box>.col-md-2,.f6-right-box>.col-xs-2{
    padding: 0;
  }
  /*隔行加块*/
  .pianleft{
    margin-left: 16.66666667%;
  }
  .f6-icon{
    width: 100%;
  }
  /*7楼*/
  .swipe-box{
    height: 424px;
  }
  .swipe-img{
    width: 100%;
    position: relative;
  }
  .know-more-btn{
    width: 130px;
    height: 35px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 60%;
    left: 50px;
    text-align: center;
    line-height: 35px;
    color: #434343;
    font-size: 16px;
    letter-spacing: 3px;
    opacity: 0.6;
    transition: all 0.5s;
    font-weight: bold;
  }
  .know-more-btn:hover{
    opacity: 1;
    background-color: #5cb4fc;
    color: #fff;
  }
  .f7-line{
    width: 60px;
    height: 4px;
    background-color: #ffffff;
    position: absolute;
    top: 54px;
    left: 50px;
  }
  .news-title{
    width: 280px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 2px;
    color: #ffffff;
    position: absolute;
    top: 72px;
    left: 50px;
  }
  /*移动端*/
  .f7-swipe-mo{
    width: 100%;
    position: relative;
  }
  .know-more-btn-mo{
    width: 80px;
    height: 24px;
    background-color: #5cb4fc;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    transition: all 0.5s;
    font-weight: bold;
    line-height: 24px;
    margin: auto;
    margin-bottom: 40px;
    margin-top: 20px;

  }
  .news-title-mo{
    width: 90%;
    font-size: 16px;
    margin: auto;
    line-height: 20px;
    text-align: center;
  }
</style>
