// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/global.css'
import dataV from '@jiaminghi/data-view'
import { Button, Select, Dialog, Table, TableColumn, Icon, Row, Col, Option, Tag } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/js/filter'
Vue.use(dataV)
Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Option)
Vue.use(Tag)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
