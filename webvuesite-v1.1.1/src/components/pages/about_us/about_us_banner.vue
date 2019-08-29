<template>
  <div>
    <div class="data-site-container">
      <div class="data-bg-img">
        <p class="data-bg-title title1">让菁准更精准，让标注更简单</p>
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
      top: 50%;
      width: 100%;
      text-align: center;
      font-size: 36px;
      color: #fff;
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
    background: url("../../../assets/images/about_images/banner.png") no-repeat center top;
    position: relative;
  }
  .title1{
    text-align: center;
  }
</style>

