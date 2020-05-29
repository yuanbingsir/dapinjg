<template>
<div>
                <el-select
              v-model="value1"
              placeholder="请选择设备"
              size="mini"
              style="margin-left:30px;width=10%;margin-right:30px;margin-top:30px"
            >
              <el-option v-for="item in name" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              v-model="value2"
              placeholder="请选择设备"
              size="mini"
              style="margin-left:30px;width=10%;margin-right:30px;margin-top:30px"
            >
              <el-option v-for="item in name" :key="item" :label="item" :value="item"></el-option> -->
            </el-select>
             <el-select
              v-model="value3"
              placeholder="请选择设备"
              size="mini"
              style="margin-left:30px;width=10%;margin-right:30px;margin-top:30px"
            >
              <el-option v-for="item in name" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              v-model="value4"
              placeholder="请选择设备"
              size="mini"
              style="margin-left:30px;width=10%;margin-right:30px;margin-top:30px"
            >
              <el-option v-for="item in name" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-button type="primary" style="margin-left:70px;font-size:16px" @click="init">播放</el-button>
            <el-button type="primary" style="margin-left:70px;font-size:16px" @click="stop1">结束</el-button>
  <div id="myPlayer" style="width: 1800px; height: 800px; margin-top:50px;margin-left:50px"></div>
</div>
</template>

<script>
import { getItemList } from '@/api'
export default {
  name: 'come',
  data () {
    return {
      player: '',
      Totalequipment: '',
      name: [],
      value4: '',
      value1: '',
      value2: '',
      value3: '',
      imagine: '',
      imagine1: '',
      imagine2: '',
      imagine3: '',
      cooker: ''
    }
  },
  created () {
    getItemList().then(res => {
      this.cooker = localStorage.getItem('cooker')
      if (res.data.ok) {
        this.Totalequipment = res.data.data
        this.Totalequipment.forEach(item => {
          this.name.push(item.equipmentName)
        })
        this.value1 = this.Totalequipment[0].equipmentName
        this.value2 = this.Totalequipment[1].equipmentName
        this.value3 = this.Totalequipment[2].equipmentName
        this.value4 = this.Totalequipment[3].equipmentName
      }
    })
  },
  methods: {
    init () {
      if (this.value1 !== '') {
        this.imagine = this.Totalequipment.filter(item => {
          if (item.equipmentName !== null) {
            return item.equipmentName.includes(this.value1)
          }
        })
        if (this.imagine[0].serial !== null) {
          this.url1 = 'ezopen://open.ys7.com/' + this.imagine[0].serial + '/1.hd.live,'
        } else {
          this.url1 = ''
        }
      }
      if (this.value2 !== '') {
        this.imagine1 = this.Totalequipment.filter(item => {
          if (item.equipmentName !== null) {
            return item.equipmentName.includes(this.value2)
          }
        })
        if (this.imagine1[0].serial !== null) {
          this.url2 = 'ezopen://open.ys7.com/' + this.imagine1[0].serial + '/1.hd.live,'
        } else {
          this.url2 = ''
        }
      }
      if (this.value3 !== '') {
        this.imagine2 = this.Totalequipment.filter(item => {
          if (item.equipmentName !== null) {
            return item.equipmentName.includes(this.value3)
          }
        })
        if (this.imagine2[0].serial !== null) {
          this.url3 = 'ezopen://open.ys7.com/' + this.imagine2[0].serial + '/1.hd.live,'
        } else {
          this.url3 = ''
        }
      }
      if (this.value4 !== '') {
        this.imagine3 = this.Totalequipment.filter(item => {
          if (item.equipmentName !== null) {
            return item.equipmentName.includes(this.value4)
          }
        })

        if (this.imagine3[0].serial !== null) {
          this.url4 = 'ezopen://open.ys7.com/' + this.imagine3[0].serial + '/1.hd.live,'
        } else {
          this.url4 = ''
        }
      }
      this.url5 = this.url1 + this.url2 + this.url3 + this.url4
      if (this.url5 === '') {
        this.$message('请选择设备')
      } else {
        this.player = new EZUIKit.EZUIPlayer({
          id: 'myPlayer',
          url: this.url5,
          autoplay: true,
          accessToken: this.cooker,
          decoderPath: '../../../static/',
          width: 1800,
          height: 800,
          splitBasis: 2
        })
      }
    },
    stop1 () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
