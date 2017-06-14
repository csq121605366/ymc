// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { Button, Select } from 'element-ui'
import '../theme/index.css'

import Vue from 'vue'
import App from './App' // 路由挂载
import router from './router/route' // 路由列表
import store from './store/store'

Vue.use(Button)
Vue.config.productionTip = false

// eslint单行验证
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
