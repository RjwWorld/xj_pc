<template>
  <div class="baidumap" id="allmap"></div>
</template>

<script>
  import BMap from 'BMap'
  export default {
    name: 'parMap',
    mounted: function () {
      this.baiduMap();
    },
    methods:{
      baiduMap:function () {
        var map = new BMap.Map("allmap");
        var point =new BMap.Point(104.062709,30.544897);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.centerAndZoom(point,20);
        map.enableScrollWheelZoom();
        map.enableContinuousZoom();
      }
    }
  }
</script>

<style scoped>
  .baidumap{
    height: 300px;
    width: 100%;
  }
</style>
