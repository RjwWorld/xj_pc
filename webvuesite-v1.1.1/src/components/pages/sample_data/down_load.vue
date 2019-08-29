<template>
  <div>
    <dataBanner></dataBanner>
    <div class="container">
      <div class="row" style="margin: 30px 0">
        <div class="col-md-6 col-xs-12" >
          <img :src="loadDataItem.image" alt="" class="data-img">
        </div>
        <div class="col-md-6 col-xs-12">
          <p class="data-name">{{loadDataItem.name}}</p>
          <p class="data-introduce">{{loadDataItem.introduce}}</p>
        </div>
      </div>
      <div class="btn-box">
        <div class="my-btn call-btn lf" @click="goto('/callUs')">联系客服</div>
        <div class="my-btn now-load-btn rt" @click="showLoadBox(loadDataItem.id)">直接下载</div>
        <Modal v-model="modal1" title="温馨提示">
          <p class="pan-logo-box"><img :src="panLogo" alt=""></p>
          <p class="pan-url-box">
            <span>下载地址:</span>
            <span>{{baiduUrl.baidu_data_url}}</span>
          </p>
          <p class="pan-psd-box">
            <span>密码:</span>
            <span>{{baiduUrl.baidu_url_password}}</span>
          </p>
        </Modal>
        <Modal
          v-model="modal2"
          title="温馨提示"
          @on-ok="ok"
          @on-cancel="cancel">

          <p class="pan-url-box">
            首次下载需要填写您的信息
          </p>
          <p class="pan-psd-box">
            点击确认进入相关页面
          </p>
        </Modal>
      </div>
    </div>
    <div class="container" style="margin-top: 40px">
      <div class="down-total">
        <p class="data-some">数据详情</p>
        <div class="data-specification layout">
          <p>{{downDataArr.dataType}}</p>
          <p><span style="margin-right: 6px">注:</span>{{downDataArr.dataTypeRemark}}</p>
        </div>
        <p class="data-some">数据字段</p>
        <p class="data-specification">{{downDataArr.dataSpecification}}</p>
        <P class="data-some">数据大小</P>
        <p class="data-specification data-size">
          <span>{{downDataArr.dataSize}}</span>
          <img :src="downLoadIcon" alt="">
        </p>
        <div class="down-load-num-box rt">
          <span>下载次数 : </span>
          <span>{{downDataArr.dataLoadNum}}</span>
          <span>发布于</span>
          <span>{{downDataArr.dataTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import dataBanner from './data_banner'
  export default {
    components:{dataBanner},
    data() {
      return {
        loadDataItem: {
            name:'国内语音语料数据',
            introduce:'数据描述 ：来自新闻网站2012年6月-7月期间国内国际，体育，社会，娱乐等18个频道的新闻数据，提供URL和正文信息。',
            image:require('../../../assets/images/service_images/c-2.jpg')
        },
        downDataArr: {
          dataType: '数据包括 630人8个不同地区的美国方言录制的音频信息',
          dataTypeRemark: '该数据集仅用于研究目的，因此不能用于商业用途',
          dataSpecification: '语音数据',
          dataSize: '690M',
          dataLoadNum: '9100',
          dataTime: '2018-10-20'
        },
        modal1: false,
        modal2:false,
        baiduUrl:'',
        panLogo:require('../../../assets/images/sample_data/wangpan.jpg'),
      }
    },
    // created(){
    //   axios.get('/api/v1.0/annotations/download_details/', {
    //     params: {id:this.$route.query.id}
    //   }).then(response=>{
    //     if (response.status===200){
    //       console.log(response.data);
    //       // this.loadDataItem=response.data;
    //       // console.log(this.loadDataItem);
    //     }
    //     })
    //     .catch(error=>{
    //       // console.log(error);
    //       alert('网络错误，不能访问');
    //     })
    // },
    methods: {
      showLoadBox(id) {
        axios.get('/api/v1.0/annotations/download/', {
          params: {id: id}
        }).then(response=>{
          if (response.status===200) {
            this.baiduUrl=response.data;
            // console.log(this.baiduUrl);
            this.modal1=true;
          }
          else {
            // console.log(222)
          }
        }).catch(error=> {
          // console.log(111);
          // console.log(error);
          this.modal2=true;
          // this.ok();
        })
      },
      ok () {location.href="http://192.168.0.164:8080/#/callUs"},
      cancel () {}
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    .my-btn{
      width: 180px;
      font-size: 20px;
    }
    .btn-box{
      padding: 0 27%;
    }
  }
  @media screen and (max-width: 600px){
    .my-btn{
      width: 100px;
      font-size: 16px;
    }
    .btn-box{
      padding: 0 15%;
    }
  }
  .data-img{
    width: 100%;
  }
  .data-name{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-left: 4px solid #5cb4fc;
    font-size: 22px;
    text-indent: 1em;
    margin-top: 20px;
  }
  .data-introduce{
    font-size: 16px;
    line-height: 30px;
    margin-top: 20px;
  }
  .my-btn{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 15px;
    background-color: #5cb4fc;
    margin-top: 20px;
    cursor: pointer;
  }
  .down-total{margin: 0 14px;}
  .data-some{
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .data-specification{
    font-size: 16px;
    margin-bottom: 30px;
  }
  .down-load-num-box{
    margin-bottom: 20px;
    font-size: 16px;
  }
  .down-load-num-box>span:nth-child(2){
    margin-right: 20px;
  }

  /*弹出样式*/
  .pan-logo-box{
    width: 100px;
    margin: 0 auto;
    text-align: center;
  }
  .pan-logo-box>img{
    width: 40px;
  }
  .pan-url-box{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
  }
  .pan-psd-box{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
  }
</style>
