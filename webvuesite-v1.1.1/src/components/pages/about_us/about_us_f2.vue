<template>
  <div>
    <div class="about-f2-container">
      <div class="container">
        <div class="row news-item-box" v-for="(item,index) in industryDynamics" :key="index"
          v-show="backIndex<=index&&index<=nextIndex">
          <div class="col-md-2 col-xs-6 news-date">
            {{item.date}}
          </div>
          <div class="col-md-2 col-xs-6">
            <div class="img-box">
              <img :src="item.img" alt="" class="news-img">
            </div>
          </div>
          <div class="col-md-8 col-xs-12 new-txt-box">
            <p class="news-title">{{item.title}}</p>
            <p class="news-content">{{item.content}}</p>
            <p class="know-more-btn" @click="goNewsDetails(item.id)">
              <span>了解更多</span>
            </p>
          </div>
        </div>
        <div class="page-box">
          <span :class="backHidden?'nexticonhidden':'next-icon'" @click="back1()" >
            <-
          </span>
          <span :class="nextHidden?'nexticonhidden':'next-icon'" @click="next1()">
            ->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        backIndex:0,
        nextIndex:1,
        total:4,
        backHidden:true,
        nextHidden:false,
        industryDynamics:[
          {
            id:0,
            img:require('../../../assets/images/about_images/news (1).png'),
            title:'特稿：迎接“新智能时代”——2018人工智能大发展',
            date:'2018.12.27',
            content:'新华社记者2018年12月第一期《科学》杂志封面，向人们介绍了一位“数字神童”——史上最\n' +
              '强棋圣“阿尔法零”,作为两年前惊艳亮相的人工智能“阿尔法围棋”进化版，“阿尔法零”不\n' +
              '但征服了围棋，而且仅分别“自学”2小时和4小时后，就击败最强的日本将棋......'
          },
          {
            id:1,
            img:require('../../../assets/images/about_images/news (2).png'),
            title:'全球首个“AI合成主播”上岗',
            date:'2018.12.27',
            content:'新华社11月7日电：在建社87周年之际，新华社联合搜狗7日在第五届世界互联网大会上发布全\n' +
              '球首个合成新闻主播——“AI合成主播”，运用最新人工智能技术，“克隆”出与真人主播拥\n' +
              '有同样播报能力的“分身”。'
          },
          {
            id:2,
            img:require('../../../assets/images/about_images/news (2).png'),
            title:'是贷记卡是的就会看到阿三',
            date:'2018.12.27',
            content:'新华社11月7日电：在建社87周年之际，新华社联合搜狗7日在第五届世界互联网大会上发布全\n' +
              '球首个合成新闻主播——“AI合成主播”，运用最新人工智能技术，“克隆”出与真人主播拥\n' +
              '有同样播报能力的“分身”。'
          },
          {
            id:3,
            img:require('../../../assets/images/about_images/news (2).png'),
            title:'安徽省肯德基爱上都很健康和',
            date:'2018.12.27',
            content:'新华社11月7日电：在建社87周年之际，新华社联合搜狗7日在第五届世界互联网大会上发布全\n' +
              '球首个合成新闻主播——“AI合成主播”，运用最新人工智能技术，“克隆”出与真人主播拥\n' +
              '有同样播报能力的“分身”。'
          },
          {
            id:4,
            img:require('../../../assets/images/about_images/news (2).png'),
            title:'撒谎大家思考和大家说客户的',
            date:'2018.12.27',
            content:'新华社11月7日电：在建社87周年之际，新华社联合搜狗7日在第五届世界互联网大会上发布全\n' +
              '球首个合成新闻主播——“AI合成主播”，运用最新人工智能技术，“克隆”出与真人主播拥\n' +
              '有同样播报能力的“分身”。'
          },
        ],
        toLeftIcon:require('../../../assets/images/about_images/next (1).png'),
        toRightIcon:require('../../../assets/images/about_images/next (2).png'),
      }
    },
    methods: {
      goNewsDetails(id){
        this.$router.push({
          path:'/newsDetails',
          query:{
            id:id
          }
        })
      },
      back1(){
        if(this.backIndex===0){
          this.backHidden=true;
        }else{
          this.backIndex -=2;
          this.nextIndex -=2;
          if (this.backIndex===0) {
            this.backHidden=true;
            this.nextHidden=false;
          }
          else{
            this.backHidden=false;
          }
        }
      },
      next1(){
        if(this.nextIndex===this.total || this.nextIndex > this.total){
          this.nextHidden=true;
        }else{
          this.backIndex +=2;
          this.nextIndex +=2;
          if(this.nextIndex===this.total || this.nextIndex > this.total){
            this.nextHidden=true;
            this.backHidden=false;
          }
          else{
            this.nextHidden=false;
          }
        }
      }
    },
  }
</script>

<style scoped>
  .col-md-8,.col-md-2,.col-xs-12,.col-xs-6{padding-right: 0;}
  @media screen and (max-width: 3000px){
    .news-item-box{
      width: 100%;
      /*height: 200px;*/
      margin-bottom: 30px;
    }
    .img-box{
      width: 200px;
      height: 200px;
    }
    .news-date{
      line-height: 200px;
      font-size: 28px;
    }
    .new-txt-box{
      width: 60%;
      float: right;
    }
    .about-f2-container{
      width: 100%;
      height: 600px;
      background-color: #fff;
      padding: 50px 0;
    }
    .next-icon{
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      cursor: pointer;
    }
    .nexticonhidden{width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      cursor: pointer;}
  }
  @media screen and (max-width: 600px){
    .img-box{
      width: 100%;
      height: 100%;
    }
    .news-item-box{
      width: 100%;
      height: 440px;
    }
    .news-date{
      line-height: 700%;
      font-size: 20px;
    }
    .new-txt-box{
      width: 100%;
      float: left;
    }
    .about-f2-container{
      width: 100%;
      height: 1100px;
      background-color: #fff;
      padding: 50px 0;
    }

    .next-icon{
      width: 30px;
      height: 30px;
      font-size: 30px;
      line-height: 30px;
      cursor: pointer;
    }
    .nexticonhidden{
      width: 30px;
      height: 30px;
      font-size: 30px;
      line-height: 30px;
      cursor: pointer;
    }
  }


  .news-img{width: 100%;}

  .img-box{
    border-radius: 50%;
    overflow: hidden;
  }

  .news-date{text-align: center;}

  .news-title{
    font-size: 20px;
    color: #5cb4fc;
    margin-bottom: 20px;
  }

  .news-content{font-size: 16px;}


  .know-more-btn{
    position: absolute;
    bottom: -60px;
    width: 134px;
    height: 33px;
    border-radius: 10px;
    text-align: center;
    line-height: 33px;
    font-size: 16px;
    cursor: pointer;
    letter-spacing: 2px;
    background-color: #5cb4fc;
    color: #fff;
    transition: all .5s;
  }
  .know-more-btn>span{
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  .know-more-btn:hover span{
    padding-right: 25px;
  }
  .know-more-btn span:after{
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .know-more-btn:hover span:after{
    opacity: 1;
    right: 0;
  }






  .page-box{
    width: 100%;
    text-align: center;
  }
  .next-icon{
    margin: 10px;
    display: inline-block;
    border: 1px solid #aaa;
    border-radius: 50%;
    text-align: center;
    color: #aaa;
    transition: all 0.5s;
  }
  .next-icon:hover{
    background-color: #5cb4fc;
    color: #fff;
  }
  .nexticonhidden{
    margin: 10px;
    display: inline-block;
    border: 1px solid #aaa;
    border-radius: 50%;
    text-align: center;
    color: #aaa;
    transition: all 0.5s;
  }
  a:visited,a:focus{text-decoration: none}

</style>
