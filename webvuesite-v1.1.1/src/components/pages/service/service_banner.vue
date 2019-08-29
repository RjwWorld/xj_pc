<template>
  <div>
    <div class="ser-site-container">
      <div class="service-bg-img">
        <p class="ser-bg-title title1">高质量数据定制服务</p>
        <p class="ser-bg-title title2">根据客户定制的需求，菁准数据提供专业的数据采集、数据标注、数据质检等一站式服务支持</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  @media screen and (max-width:3000px){
    .ser-bg-title{
      position: absolute;
      left: 10%;
      text-align: left;
      font-size: 44px;
      color: #fff;
    }
    .title1{top: 30%;font-weight: bold}
    .title2{
      width: 40%;
      top: 44%;
      font-size: 26px;
    }
  }
  @media screen and (max-width:600px){
    .ser-bg-title{
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
      top: 44%;
      font-size: 26px;
      left: 50%;
      margin-left: -40%;
    }
  }
  .ser-site-container{
    margin-top: 51px;
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .service-bg-img{
    width: 100%;
    height: 500px;
    background: url("../../../assets/images/service_images/banner.png") no-repeat center top;
    position: relative;
  }
</style>
