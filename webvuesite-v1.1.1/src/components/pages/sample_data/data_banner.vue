<template>
  <div>
    <div class="data-site-container">
      <div class="data-bg-img">
        <p class="data-bg-title title1">为服务商提供高效精准的数据</p>
        <p class="data-bg-title title2">适用于各种场景的需求，涵盖文本数据，语音数据，视频数据，图片数据等多维度数据支持</p>
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
    .data-bg-title{
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
    .data-bg-title{
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
  .data-site-container{
    margin-top: 51px;
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .data-bg-img{
    width: 100%;
    height: 500px;
    background: url("../../../assets/images/sample_data/data_banner.png") no-repeat center top;
    position: relative;
  }
</style>


<style scoped>

</style>
