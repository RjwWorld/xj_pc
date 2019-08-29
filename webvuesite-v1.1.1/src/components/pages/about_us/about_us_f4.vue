<template>
  <div>
    <div class="about-us-f4-container">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-xs-12 map-box">
            <parMap></parMap>
          </div>
          <div class="col-md-3 col-xs-12">
            <p class="local-box">
              公司地址：成都市高新区
              <br>
              益州大道1800号
              <br>
              移动互联创业大厦G1101
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import parMap from '../about_us/par_map'
  export default {
    components:{parMap},
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 3000px){
    .local-box{
      width: 215px;
      height: 0;
      padding-bottom: 100%;
      margin-top: 50%;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
    }
  }
  @media screen and (max-width: 600px){
    .local-box{
      width: 100%;
      height: 50px;
      text-align: center;
      padding-bottom: 0px;
      margin: auto;
      margin-top: 0;
      margin-bottom: 30px;
      background-color: #fff;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .about-us-f4-container{
    width: 100%;
    background-color: #fff;
    /*margin-bottom: 40px;*/
  }
  .map-box{margin: 30px 0}

</style>
