<template>
  <div id="Sharingrouter">
    <div id="container" ref="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
import { getItemList } from '@/api'
export default {
  data () {
    return {
      marker: '',
      longitude: 116.509578,
      latitude: 39.849327,
      map: '',
      row: {
        equipmentName: '',
        equipmentNumber: '',
        workArea: '',
        h2s: '',
        pressure: ''
      },
      longlat: []
    }
  },
  mounted () {
    this.init()
  },
  created () {
    getItemList().then(res => {
      if (res.data.ok) {
        this.longlat = res.data.data
        console.log(this.longlat)
        this.init()
      }
    })
  },
  methods: {
    openDetails1 (row) {
      this.longitude = row.latitude
      this.latitude = row.longitude
      this.row = row
      this.init()
    },
    init () {
      var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [this.longitude, this.latitude], // 地图中心点
        mapStyle: 'amap://styles/e19dbb1c036a21fa7d32933824f891f0'
      })
      var infoWindow = new AMap.InfoWindow({
        isCustom: false,
        content: '<div style="height:180px;width:300px;margin-left:20px;"><div>设备名称：' + this.row.equipmentName + '</div><div style="margin-top:10px">设备编号：' + this.row.equipmentNumber + '</div><div style="margin-top:10px">硫化氢浓度：' + this.row.h2s + '</div><div style="margin-top:10px;">压力：' + this.row.pressure + '</div><div style="margin-top:10px">所属工区：' + this.row.workArea + '</div></div>',
        offset: new AMap.Pixel(16, -45)
      })
      var onMarkerClick = function (e) {
        infoWindow.open(map, e.target.getPosition())
      }
      var marker = new AMap.Marker({
        icon: '//vdata.amap.com/icons/b18/1/2.png',
        position: [this.longitude, this.latitude]
      })
      var markerList = []
      for (var i = 1; i < this.longlat.length; i++) {
        if (this.longlat[i].latitude !== null) {
          markerList.push(new AMap.Marker({
            position: [this.longlat[i].latitude, this.longlat[i].longitude]
          }))
        }
      }
      map.add(markerList)
      map.add(marker)
      marker.on('click', onMarkerClick)
    }
  }

}
</script>

<style>
#container {
  width: 100%;
  height: 92%;
  position: absolute;
  cursor: pointer;
  bottom: 0
}
.amap-info-content{
  background-color: rgb(59,222,254);
  color:#fff;
}
</style>
