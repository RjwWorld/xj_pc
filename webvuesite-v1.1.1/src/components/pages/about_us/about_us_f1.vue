<template>
  <div>
    <div class="f1-container">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-5 logo-box">
            <img :src="f1Arr.logo" alt="" class="a-logo">
          </div>
          <div class="col-md-8 col-xs-7 p-box">
            <p class="p1">{{f1Arr.p1}}</p>
            <p class="p1">{{f1Arr.p2}}</p>
            <p class="p1 p3">{{f1Arr.p3}}</p>
            <p class="watermark">XIANGJI</p>
            <p class="blue-line"></p>
          </div>
          <div class="col-xs-12 p3-2">
            <p class="p1">{{f1Arr.p3}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        f1Arr: {
          logo:require('../../../assets/images/about_images/logo.png'),
          p1:'”菁准数据“为成都向己科技有限公司旗下品牌。',
          p2:'公司是一家致力于为客户提供快速、准确的专业数据服务商,主要为广大客户提供准确、快捷的数据采集、数据标注、数据质检服务。',
          p3:'目前，向己科技形成了专业服务的经营体系，已开展数据标注线上业务合作公司团队有93家，线上标注人员近2万余人，合作渠道数量还在不断增加。公司正在筹备四川、海南、江西、山西等多地区数据标注基地，为构建专业、高效、安全的数据标注业务体系提供可靠的支撑保障。',

        }
      }
    },
  }
</script>

<style scoped>
  .col-xs-5{padding-right: 0}
  @media screen and (max-width: 3000px){
    .f1-container{
      background-color: #fff;
      padding: 30px 0;
    }
    .p-box{
      margin-top: 30px;
      position: relative;
      padding-bottom: 95px;
    }
    .p1{
      font-size: 20px;
      line-height: 45px;
    }
    .a-logo{width: 300px;}
    .p3-2{display: none}
    .watermark{
      position: absolute;
      bottom: 0;
      font-size: 72px;
      color: #eee;
      font-weight: bold;
      z-index: 30;
    }
    .blue-line{
      width: 195px;
      height: 19px;
      background-color: #5cb4fc;
      position: absolute;
      bottom: 30px;
      left: 200px;
      z-index: 10;
    }
  }
  @media screen and (max-width: 600px){
    .f1-container{background-color: #f2f2f2;padding: 0}
    .p1{font-size:12px;line-height: 33px;}
    .a-logo{width: 100%;}
    .p3{display: none}
    .p3-2{display: block}
    .p-box{margin-top: 0;padding-bottom: 0;}
    .watermark{display: none}
    .blue-line{display: none}
  }



</style>
