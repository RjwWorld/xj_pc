<template>
  <div class="header-container">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img :src="logoImg" alt="logo" @click="goto('/')" class="logo-img lf">
          <div class="navbar-brand">
            <span class="logo-i">
              <span>AI数据集解决方案提供商</span>
            </span>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link to="/" tag="a" exact>首页</router-link></li>
            <li><router-link to="/service" tag="a">产品服务</router-link></li>
            <li><router-link to="/sampleData" tag="a">免费数据</router-link></li>
            <!--<li class="dropdown">-->
              <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">-->
                <!--免费数据-->
                <!--<span class="caret"></span>-->
              <!--</a>-->
              <!--<ul class="dropdown-menu">-->
                <!--<li v-for="(item,index) in platformDataItemArr" :key="index" @click="gotoDataItem(item.path)">-->
                  <!--{{item.name}}-->
                <!--</li>-->
              <!--</ul>-->
            <!--</li>-->
            <li><router-link to="/annotationPlatform" tag="a">标注平台</router-link></li>
            <li><router-link to="/aboutUs" tag="a">关于我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                联系我们
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a :href="qqLocal" target="_blank">联系QQ ： 1013554926</a></li>
                <li>联系电话：15882424633</li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      logoImg:require('../assets/images/logo.png'),
      qqLocal:'http://wpa.qq.com/msgrd?v=3&uin=526172689&site=qq&menu=yes',
      platformDataItemArr:[
        {id:1,name:'全部数据',path:'/sampleData'},
        {id:2,name:'语音数据'},
        {id:3,name:'文本数据'},
        {id:4,name:'视频数据'},
        {id:5,name:'图像数据'},
      ],
    }
  },
  methods: {
    // gotoDataItem(path){
    //   this.$router.push({path:path})
    // }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 3000px){
    .dropdown-menu > li > a{
      padding: 3px 10px;
      transition: all .3s;
    }
  }
  @media screen and (max-width: 767px){
    .dropdown-menu > li > a{
      padding: 3px 0;
      transition: all .3s;
    }
  }
  .header-container{
    width: 100%;
    background-color: #fff;
  }
  .navbar-default{
    background-color: #fff;
  }
  .navbar{
    margin-bottom: 0;
  }
  .navbar-nav > li > a{
    font-size: 14px;
    padding-bottom: 10px;
  }

  .navbar-brand{
    padding: 15px 0;
    margin-right: 40px;
    font-size: 12px;
    font-weight: bold;
    color: #434343;
    letter-spacing: 1px;
    line-height: 40px;
  }
  .logo-img{
    width: 46px;
    height: 40px;
    vertical-align: top;
    margin: 6px 15px 0 6px;
  }
  /*router激活状态下高亮*/
  .router-link-active{
    color: #5cb4fc!important;
    border-bottom: 2px solid #5cb4fc;
  }
  .dropdown-menu{
    padding: 5px 0;
    min-width: 100px;
  }

  .dropdown-menu>li{
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 8px;
  }
  .dropdown-menu>li:first-child{cursor: pointer}
  .dropdown-menu>li:last-child{cursor: default;padding: 0 4px 0 10px}
  .dropdown-menu>li>a:hover:first-child{
    color: #fff;
    background-color: #5cb4fc;
  }
  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {
    color: #5cb4fc;
    background-color: #fff;
  }
  .navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header{
    padding:5px 15px 5px 9px
  }
</style>
