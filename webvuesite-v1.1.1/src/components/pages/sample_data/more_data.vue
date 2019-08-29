<template>
  <div class="more-container-big">
    <div class="more-site-container">
      <div class="more-bg-img">
        <p class="more-bg-title title1">为服务商提供高效精准的数据</p>
        <p class="more-bg-title title2">适用于各种场景的需求，涵盖文本数据，语音数据，视频数据，图片数据等多维度数据支持</p>
      </div>
    </div>
    <div class="container data-item-name">
      <img :src="titleIconItem" alt="" class="title-icon">
      <span class="title-name">{{moreDataItem.category_name}}</span>
    </div>
    <div class="container download-content-box">
      <div class="col-md-12 col-xs-12" v-for="(item,index) in moreData" :key="index" style="margin-top: 20px">
        <div class="col-md-9 col-xs-9 more-name" @click="goMoreDetails(item.id)">
          {{item.name}}
        </div>
        <div class="col-md-3 col-xs-3">
          <img :src="loadIcon" alt="" class="download-btn">
          <span class="load-num">{{item.download}}</span>
        </div>
      </div>
      <div class="col-md-12 col-xs-12">
        <pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import pagination from '../pagination'
  export default {
    components:{pagination},
    data() {
      return {
        total:12,
        display:10,
        current: 1,   // 当前的页数
        moreDataItem:'',
        moreData:[
          {id:0,name:'美式英语语音识别',download:1212},
          {id:1,name:'美式英语语音识别',download:12124},
          {id:2,name:'美式英语语音识别',download:122},
          {id:3,name:'美式英语语音识别',download:121},
          {id:4,name:'美式英语语音识别',download:11212},
          {id:5,name:'美式英语语音识别',download:12},
          {id:6,name:'美式英语语音识别',download:12},
          {id:7,name:'美式英语语音识别',download:12},
          {id:8,name:'美式英语语音识别',download:12},
          {id:9,name:'美式英语语音识别',download:12},
        ],
        titleIconItem:'',
        loadIcon:require('../../../assets/images/sample_data/download_button.png'),
        titleIcon:[
          {tIcon:require('../../../assets/images/sample_data/icon (4).png')},
          {tIcon:require('../../../assets/images/sample_data/icon (3).png')},
          {tIcon:require('../../../assets/images/sample_data/icon (2).png')},
          {tIcon:require('../../../assets/images/sample_data/icon (1).png')},
        ],
      }
    },
    created(){
      axios.get('/api/v1.0/annotations/download_category/', {
        params: {id:this.$route.query.id}
      })
        .then(response=>{
          if (response.status===200){
            this.moreDataItem=response.data;
            // this.moreData=response.data.data;
            this.titleIconItem=this.titleIcon[response.data.id].tIcon;
            console.log(this.moreDataItem);
            console.log(this.moreData)
          }

        })
        .catch(error=>{
          if(error && error.response){
            this.errorstatus(error)
          }
        })
    },
    methods: {
      pagechange(currentPage) {
      //   if (this.whatNav === 2) {
      //     // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      //     axios.get('/api/v1.0/info/myInfo', {params: {page_notice: currentPage}}).then((response) => {
      //       if (response.status === 200) {
      //         this.noticeItemArr = response.data.notice_info;
      //         this.infoItemArr = response.data.my_info;
      //         this.isRead = response.data.is_watch;
      //         this.total_notice = response.data.pageinator_notice;
      //         this.total_my = response.data.pageinator_my;
      //       }
      //     })
      //   }
      },
      goMoreDetails(id) {
        this.$router.push({
          path: '/sampleData/downLoad/',
          query: {
            id: id
          }
        })
      },

    },
  }
</script>

<style scoped>
  .more-container-big{
    /*margin-bottom: 40px;*/
    /*height: 100%;*/
  }
  @media screen and (max-width:3000px){
    .more-bg-title{
      position: absolute;
      left: 10%;
      text-align: left;
      font-size: 44px;
      color: #fff;
    }
    .title1{top: 30%;font-weight: bold}
    .title2{
      width: 40%;
      top: 50%;
      font-size: 26px;
    }
  }
  @media screen and (max-width:600px){
    .more-bg-title{
      position: absolute;
      width: 100%;
      left: 0;
      text-align: center;
      font-size: 36px;
      color: #fff;
    }
    .title1{top: 30%;}
    .title2{
      width: 80%;
      top: 50%;
      font-size: 26px;
      left: 50%;
      margin-left: -40%;
    }
  }
  .col-md-12,.col-xs-12,.col-xs-9,.col-md-9,.col-xs-3{padding: 0}

  .more-site-container{
    margin-top: 51px;
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .more-bg-img{
    width: 100%;
    height: 500px;
    background: url("../../../assets/images/sample_data/more_data_banner.png") no-repeat center top;
    position: relative;
  }

  .data-item-name{
    height: 80px;
    line-height: 80px;
  }
  .title-icon{
    margin-top: 20px;
  }
  .title-name{
    font-size: 18px;
    margin-left: 10px;
  }
  .more-name{
    font-size: 16px;
    cursor: pointer;
    transition: all .3s;
  }
  .more-name:hover{color: #5cb4fc}
  .download-content-box{
    margin-bottom: 84vh;
    height: 30px;
    line-height: 30px;
  }
  .download-btn{
    width: 16px;
    margin: 7px 4px 0 0;
  }
  .load-num{font-size: 16px}
</style>
