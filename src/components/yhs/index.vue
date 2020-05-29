<template>
<iframe
   :src="this.urldz"
  id="myPlayer"
  allowfullscreen
  v-if="sxifram"
>
</iframe>
</template>

<script>
import { gettookin, geiyuntai } from '@/api'
export default {
  data () {
    return {
      player: '',
      cooker: '',
      urldz: '',
      yuntai: '',
      sxifram: false,
      startLimit: '',
      stattime: ''
    }
  },
  created () {
    if (!localStorage.getItem('cooker')) {
      gettookin().then(res => {
        localStorage.setItem('cooker', res.data.data.accessToken)
      })
    } else {
      this.cooker = localStorage.getItem('cooker')
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    checkTime (i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
    openDetails (Serpentine) {
      this.yuntai = Serpentine.serial
      if (Serpentine.serial === '') {
        this.sxifram = false
      } else {
        this.sxifram = true
      }
      this.urldz = 'https://open.ys7.com/ezopen/h5/iframe_se?url=ezopen://open.ys7.com/' + Serpentine.serial + '/1.hd.live&autoplay=1&accessToken=' + this.cooker + '&begin=20200421&end=20200421'
    },
    openDetails2 (ser) {
      console.log(ser)
      this.sxifram = true
      this.startLimit = new Date(ser.alarmTime)
      this.stattime =
        this.startLimit.getFullYear() +
        '' + '0' +
        (this.startLimit.getMonth() + 1) +
        '' +
        this.checkTime(this.startLimit.getDate()) +
        this.checkTime(this.startLimit.getHours()) +
        this.checkTime(this.startLimit.getMinutes()) +
        this.checkTime(this.startLimit.getSeconds())
      console.log(this.stattime)
      this.urldz = 'https://open.ys7.com/ezopen/h5/iframe_se?url=ezopen://open.ys7.com/' + ser.deviceSerial + '/1.rec?begin=' + this.stattime + '&accessToken=' + this.cooker
    },
    control (id) {
      geiyuntai(this.cooker, this.yuntai, id).then(res => {
      })
    },
    init () {
      setTimeout(function () {
        this.player = new EZUIKit.EZUIPlayer('myPlayer')
      }, 20)
    }
  }
}
</script>

<style>
#myPlayer{
  width: 95%;
  height: 88%;
  margin-left: 2%;
  margin-top: 0%;
}
</style>
