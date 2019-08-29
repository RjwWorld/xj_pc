<template>
  <div>
    <annotationPlatformBanner></annotationPlatformBanner>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xs-12" style="margin: 40px 0" v-for="(item,index) in floorArr" :key="index">
          <div class="col-md-6 col-xs-12" :class="{push6:index%2===1}">
            <img :src="item.img" alt="" class="p-img">
          </div>
          <div class="col-md-6 col-xs-12 content-container" :class="{pull6:index%2===1}">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.text}}</p>
            <p class="join-btn" @click="goAnnotation()">
              <span>立即加入</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import annotationPlatformBanner from '../components/pages/annotationPlatform/annotationPlatform_banner'
  export default {
    components:{annotationPlatformBanner},
    data() {
      return {
        floorArr: [
          {
            title:'语音数据',
            img:require('../assets/images/platform_images/speack_data.jpg'),
            text:'进行语音数据集的精准标注，包括转写、判断是否有效、判断人物性别、判断是否有口音和是否有底噪、判断说话人情绪等'
          },
          {
            title:'文本数据',
            img:require('../assets/images/platform_images/text_data.jpg'),
            text:'进行文本数据集的精准标注，包括类型归类、内容判断和提取、注释、主题筛选等。'
          },
          {
            title:'图片数据',
            img:require('../assets/images/platform_images/image_data.jpg'),
            text:'进行图片数据集的精准标注，包括行人框、车辆框、人体轮廓、人脸手势骨骼打点、图片分类和标识等。'
          },
          {
            title:'视频数据',
            img:require('../assets/images/platform_images/video_data.jpg'),
            text:'进行视频数据集的精准标注，包括主题分类，切割、属性筛选、主体标识和轨迹分析等。'
          },

        ]
      }
    },
    methods: {
      goAnnotation(){
        top.location.href="http://www.jzsjfw.com:8890/#/"
      }
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    /*列偏移*/
    .push6{left: 50%;}
    .pull6{right: 50%;}
    .item-title{margin: 20px 0 20px 30px;}
    .item-content{margin-left: 30px;}
    .content-container{height: 300px;}
    .join-btn{margin-left: 30px}
  }
  @media screen and (max-width: 600px){
    /*列偏移*/
    .push6{left: 0;}
    .pull6{right: 0;}
    .item-title{margin: 20px 0 ;}
    .item-content{margin-left: 0;}
    .content-container{height: 230px;}
    .join-btn{margin-left: 0}
  }
  .p-img{width: 100%}
  .item-title{
    height: 34px;
    font-size: 20px;
    line-height: 34px;
    border-left: 4px solid #5cb4fc;
    text-indent: 1em;
    letter-spacing: 2px;
  }
  .item-content{
    font-size: 16px;
    line-height: 30px;
  }
  .join-btn{
    position: absolute;
    bottom: 10px;
    color:#fff;
    padding: 8px;
    text-align: center;
    cursor: pointer;
    font-size:18px;
    border-radius: 4px;
    background-color:#5cb4fc;
    border: none;
    width: 130px;
    transition: all 0.5s;
  }
  .join-btn>span{
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  .join-btn:hover span{
    padding-right: 25px;
  }
  .join-btn span:after{
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .join-btn:hover span:after{
    opacity: 1;
    right: 0;
  }
</style>
