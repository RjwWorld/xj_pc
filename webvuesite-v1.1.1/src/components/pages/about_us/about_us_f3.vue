<template>
  <div>
    <div class="about-f3-container">
      <div class="row" style="margin: 0">
        <div class="col-md-4 col-xs-12 item-box" v-for="(item,index) in joinUsArr" :key="index">
          <img :src="item.img" alt="" class="join-bg">
          <p class="pro-name">{{item.proName}}</p>
          <p class="txt">{{item.txt}}</p>
          <p class="name">{{item.name}}</p>
          <p class="phone">TEL ：{{item.phone}}</p>
          <p class="email">Email : {{item.email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        joinUsArr:[
          {
            id:1,
            img:require('../../../assets/images/about_images/contact (2).png'),
            proName:'渠道加入',
            txt:'线下团队、其他资源',
            name:'张女士（Brant）',
            phone:'17683283296',
            email:'brant@jzsjfw.com'
          },
          {
            id:2,
            img:require('../../../assets/images/about_images/contact (3).png'),
            proName:'项目对接',
            txt:'客户需求、数据定制',
            name:'夏先生（Allen）',
            phone:'17381842007',
            email:'allen@jzsjfw.com'
          },
          {
            id:3,
            img:require('../../../assets/images/about_images/contact (1).png'),
            proName:'商务合作',
            txt:'企业投资、战略合作',
            name:'谭先生（Harry）',
            phone:'16619913869',
            email:'harry@jzsjfw.com'
          }
        ],
      }
    },
  }
</script>

<style scoped>
  .col-md-4,.col-xs-12{padding: 0}
  .join-bg{width: 100%;position: relative}
  .item-box>p{
    position: absolute;
    color: #fff;
    width: 80%;
    left: 50%;
    margin-left: -40%;
    text-align: center;
    font-size: 22px;
  }
  .pro-name{
    top: 28%;
    font-size: 26px;
    font-weight: bold;
  }
  .txt{top:38%;}
  .name{top:54%;}
  .phone{top:61%}
  .email{
    top: 70%;}
</style>
