<template>
  <div class="title-box">
    <div class="title-sm-box">
      <!--<div class="title-line-lf line"></div>-->
      <div class="title-txt">{{title}}</div>
      <!--<div class="title-line-rt line"></div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      title:String,
    }
  }
</script>

<style scoped>
  .title-box{
    text-align: center;
    margin: 51px 0 50px 0;
    font-size: 30px;
    color: #5cb4fc;
  }
  .title-sm-box{
    position: relative;
    width: 280px;
    height: 40px;
    margin: auto;
    line-height: 40px;
  }
  .line{
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #5cb4fc;
    top: 50%;
  }
  .title-line-lf{
    left: 0;

  }
  .title-line-rt{
    right: 0;
  }
</style>
