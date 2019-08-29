<template>
  <div>
    <dataBanner></dataBanner>
    <p class="title-name">优质数据下载</p>
    <div class="container">
      <div class="row" v-for="(item,index) in loadDataArr" :key="index">
        <div class="col-md-12 col-xs-12 title-container">
          <div class="col-md-6 col-xs-6 title title1">
            <span class="title-icon-box"><img :src="titleIcon[index].icon" class="title-icon"></span>
            <span class="item-category-name">{{item.category_name}}</span>
          </div>
          <div class="col-md-6 col-xs-6 title " >
            <span @click="goMoreData(item.id)" class="title2">更多 >></span>
          </div>
        </div>
        <div class="col-md-3 col-xs-6 cont-container" v-for="(item,index) in downloadsArr1" :key="index"
          @click="goDetails(item.id)">
          <div class="img-box">
            <img :src="item.img" alt="">
          </div>
          <div class="down-msg">
            <p class="down-name">{{item.name}}</p>
            <div class="down-last-row">
              <p class="free-box lf">{{item.free}}</p>
              <p class="load-icon-box rt">
                <img :src="loadIcon" class="load-btn">
                <span>{{item.download}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="title-name">热门下载</p>
    <div class="container" style="margin-bottom: 40px">
      <div class="row">
        <div class="col-md-3 col-xs-6 cont-container" v-for="(item,index) in hotLoadArr" :key="index"
             @click="goDetails(item.id)">
          <div class="img-box">
            <img :src="item.img" alt="">
          </div>
          <div class="down-msg">
            <p class="down-name">{{item.name}}</p>
            <div class="down-last-row">
              <p class="free-box lf">{{item.free}}</p>
              <p class="load-icon-box rt">
                <img :src="loadIcon" class="load-btn">
                <span>{{item.download}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import dataBanner from '../components/pages/sample_data/data_banner'
  export default {
    components:{dataBanner},
    data() {
      return {
        loadDataArr:'',
        downloadsArr:'',
        titleIcon:[
          {id:0,icon:require('../assets/images/sample_data/icon (2).png')},
          {id:1,icon:require('../assets/images/sample_data/icon (4).png')},
          {id:2,icon:require('../assets/images/sample_data/icon (3).png')},
          {id:3,icon:require('../assets/images/sample_data/icon (1).png')},
        ],
        downloadsArr1:[
          {
            id:0,
            download:3,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:1,
            download:5,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:2,
            download:12,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:3,
            download:10,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:4,
            download:4,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:5,
            download:6,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',
          },
        ],
        loadIcon:require('../assets/images/sample_data/download_button.png'),
        hotLoadArr:[
          {
            id:0,
            download:3,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:1,
            download:5,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:2,
            download:12,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:3,
            download:10,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:4,
            download:4,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',

          },
          {
            id:5,
            download:6,
            name:'美式英语语音识别数据',
            img:require('../assets/images/service_images/c-2.jpg'),
            free:'免费',
          },
        ],
      }
    },
    created(){
      axios.get('/api/v1.0/annotations/download_index/')
        .then(response=>{
          this.loadDataArr=response.data.data;
          this.downloadsArr=response.data.downloads;
          console.log(this.loadDataArr);
          console.log(this.downloadsArr)
        })
        .catch(error=>{
          // console.log(error);
          alert('网络错误，不能访问');
        })
    },
    methods: {
      goMoreData(id){
        this.$router.push({
          path:'/sampleData/moreData/',
          query:{
            id:id
          }
        })
      },
      goDetails(id){
        this.$router.push({
          path:'/sampleData/downLoad/',
          query:{
            id:id
          }
        })
      },
    },
  }
</script>

<style scoped>
  @media screen and (max-width:3000px){

  }
  @media screen and (max-width:600px){

  }
  /*.col-md-12,.col-xs-12,.col-md-6,.col-xs-6{padding: 0}*/
  .title-name{
    font-size: 24px;
    text-align: center;
    margin: 30px auto;
  }
  .title-container{
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    margin: 50px 0 0 0;
  }
  .title{vertical-align: middle}
  .title1{
    text-align: left;
    color: #5cb4fc;
    font-size: 18px;
  }
  .title2{
    float: right;
    cursor: pointer;
    transition: all .3s;
  }
  .title2:hover{
    color: #5cb4fc;
  }
  .title-icon-box{
    display: inline-block;
    width: 38px;
    height: 38px;
    text-align: center;
    margin-right: 6px;
  }

  .cont-container{
    cursor: pointer;
  }
  .img-box{
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
  }
  .img-box>img{
    width: 100%;
    transition: all 3s;
  }
  .img-box>img:hover{
    transform: scale(1.2,1.2);
  }

  .down-msg{
    width: 100%;
  }
  .down-last-row{
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .down-name{
    font-size: 16px;
    text-align: left;
    /*margin-left: 4px;*/
  }
  .free-box{font-size: 16px;}
  .load-btn{
    width: 16px;
    margin-top: 6px;
  }
</style>
