<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('keydown', this.KeyDown, true)// 监听按键事件
  },
  methods: {
    KeyDown (event) {
      if (event.keyCode === 122) {
        location.reload()
      }
    }
  }
}
</script>

<style>
</style>
