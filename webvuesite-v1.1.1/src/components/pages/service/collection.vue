<template>
  <div>
    <serviceBanner></serviceBanner>
    <div class="container">
      <div class="row target">
        <ul class="col-md-12 category-box" v-for="(item, index) in service" :key="index">
          <li class="col-md-2 col-xs-12 category-1-box box-style" @click="showItem($event)">{{item.category_1_name}}</li>
          <li class="col-md-2 col-xs-12 category-2-box box-style" v-for="(it,index) in item.category_2" :key="index"
            @click="chooseItem(item.category_1_id,it.category_2_id)" :class="{chooseitem:isChoose===it.category_2_id}">
            {{it.category_2_name}}
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12 col-xs-12" v-for="(item,index) in data" :key="index">
          <div class="col-md-6 col-xs-12 item-logo">
            <img :src="item.logo" alt="">
          </div>
          <div class="col-md-6 col-xs-12 item-txt">
            <p class="item-title" @click="goDetails(item.id)">{{item.title}}</p>
            <p class="item-introduce">
              {{item.introduce}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import serviceBanner from './service_banner'
  export default {
    components:{serviceBanner},
    data() {
      return {
        isChoose:0,
        collectionItemArr:'',
        collectionItemService:'',
        annotationService:'',
        service: [
          {
            "category_1_name": "视频采集",
            "category_2": [
              {
                "category_2_id": 14,
                "category_2_name": "小猪成长视频采集"
              }
            ],
            "category_1_id": 11
          },
          {
            "category_1_name": "图片采集",
            "category_2": [
              {
                "category_2_id": 15,
                "category_2_name": "猫狗照片采集"
              },
              {
                "category_2_id": 16,
                "category_2_name": "名片采集"
              },
              {
                "category_2_id": 17,
                "category_2_name": "明星图片采集"
              },
              {
                "category_2_id": 18,
                "category_2_name": "人脸采集"
              },
              {
                "category_2_id": 19,
                "category_2_name": "植物图片采集"
              }
            ],
            "category_1_id": 12
          },
          {
            "category_1_name": "文本采集",
            "category_2": [
              {
                "category_2_id": 20,
                "category_2_name": "德语预料采集"
              },
              {
                "category_2_id": 21,
                "category_2_name": "俄语语料采集"
              },
              {
                "category_2_id": 22,
                "category_2_name": "儿童语料采集"
              },
              {
                "category_2_id": 26,
                "category_2_name": "医药问答质检"
              }
            ],
            "category_1_id": 13
          },
          {
            "category_1_name": "语音采集",
            "category_2": [
              {
                "category_2_id": 13,
                "category_2_name": "儿童语音采集"
              }
            ],
            "category_1_id": 14
          }
        ],
        data: [
          {
            "id": 13,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "小猪成长视频采集",
            "introduce": "视频采集中的小猪成长视频采集",
            "pageinators": 1
          },
          {
            "id": 14,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "猫狗照片采集",
            "introduce": "图片采集中的猫狗照片采集",
            "pageinators": 2
          },
          {
            "id": 15,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "名片采集",
            "introduce": "图片采集中的名片采集",
            "pageinators": 2
          },
          {
            "id": 16,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "明星图片采集",
            "introduce": "图片采集中的明星图片采集",
            "pageinators": 2
          },
          {
            "id": 17,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "人脸采集",
            "introduce": "图片采集中的人脸采集",
            "pageinators": 2
          },
          {
            "id": 19,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "儿童语料采集",
            "introduce": "图片采集中的儿童语料采集",
            "pageinators": 1
          },
          {
            "id": 20,
            "logo": require("../../../assets/images/service_images/c-1.jpg"),
            "title": "医药问答质检",
            "introduce": "文本质检中的医药问答质检",
            "pageinators": 1
          }
        ]
      }
    },
    created(){
      // axios.get('/api/v1.0/service/data_server/', {params:{type_id:this.$route.query.type_id}})
      //   .then(response=>{
      //     if (response.status===200){
      //       this.service=response.data.service;
      //       this.data=response.data.data;
      //     }
      //
      //   })
      //   .catch(error=>{
      //     // console.log(error);
      //     alert('网络错误，不能访问');
      //   })
    },
    methods: {
      // chooseItem(category_1_id,category_2_id){
      //   axios.get('/api/v1.0/service/data_service/',{
      //     params:{
      //       type_id:this.$route.query.type_id,
      //       category_1_id:category_1_id,
      //       category_2_id:category_2_id,
      //     }
      //   }).then(response=>{
      //     if (response.status===200){
      //       this.data = response.data.data;
      //     }
      //   }).catch(error=>{
      //     if (error && error.response){
      //       this.errorstatus(error)
      //     }
      //   })
      //   this.isChoose=category_2_id
      //
      // },
      goDetails(id){
        this.$router.push({
          path:'/service/details',
          query:{
            id:id
          }
        })
      },
      showItem(ev){
        var $title = $(ev.target);
        $title.parent('.category-box').find('.category-2-box').toggle(500);
      }
    },
  }
</script>

<style scoped>
  @import "../../../assets/css/my-keyframes.css";
  @media screen and (max-width:3000px){
    .item-txt{
      margin-top: 70px;
    }
    .item-title{
      margin-top: 30px;
      cursor: pointer;
      transition: all .3s;
    }
    .item-title:hover{
      color: #5cb4fc;
    }
    .item-introduce{
      margin-top: 30px;
    }
  }
  @media screen and (max-width:600px){
    .item-txt{
      margin-top: 20px;
    }
    .item-title{
      margin-top: 0;
      text-decoration: underline;
    }
    .item-introduce{
      margin-top: 10px;
    }
    /*.category-box{height: 50px;overflow: hidden;}*/
    /*.category-box:hover{*/
    /*-webkit-animation: collection-item-change 2s  1 alternate forwards;*/
    /*animation: collection-item-change 2s  1 alternate forwards;*/
    /*}*/
    .category-1-box{margin-top: 10px}
    .category-2-box{display: none}
  }
  .container{margin-bottom: 50px}
  .category-box{
    /*border: 1px solid red;*/
    margin-top: 20px;
  }
  .box-style{
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    text-align: center;
  }
  .category-1-box{
    background-color: #5cb4fc;
    color: #fff;
  }
  .category-2-box{
    border-bottom: 1px solid #ddd;
    cursor: pointer;

  }
  .chooseitem{
    /*background-color: #ddd;*/
    transition: all .4s;
    color: #5cb4fc;
  }
  .item-logo{
    margin-top: 70px;
    margin-left: 0;
    padding: 0;
  }
  .item-logo>img{width: 100%}
  .item-txt{
    padding: 0;
  }
  .item-title{
    height: 40px;
    line-height: 40px;
    text-indent: 20px;
    border-left: 4px solid #5cb4fc;
    letter-spacing: 3px;
    color: #434343;
    margin-left: 27px;
    font-size: 18px;
  }
  .item-introduce{
    font-size: 16px;
    margin-left: 27px;
    text-indent: 24px;
    letter-spacing: 2px;
  }
</style>
