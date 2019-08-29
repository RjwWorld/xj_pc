<template>
  <div id="app">
    <pcHeader></pcHeader>
    <router-view/>
    <floorFixed></floorFixed>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
  import pcHeader from './components/pc_header'
  import pcFooter from './components/pc_footer'
  import floorFixed from './components/pages/floor_fixed'


export default {
  name: 'App',
  components:{
    pcHeader,
    pcFooter,
    floorFixed
  },
  data() {
    return {

    }
  },

  // mounted:function () {
  //   this.$router.afterEach((to, from, next) => {
  //     window.scrollTo(0, 0)
  //   })
  // },


  methods: {
    goto(path) {
      this.$router.push({path:path})
    }
  },
}
</script>

<style>
  @import "./assets/css/common.css";
  #app{
    color: #434343;
  }
</style>
