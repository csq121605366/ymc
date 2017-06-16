// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条 样式
import './assets/stylus/main.styl'
import '../theme/index.css'
import './assets/scss/mycss.scss'
import {
  Pagination,
  Button,
  Select,
  Dialog,
  Autocomplete,
  Carousel,
  CarouselItem,
  Card,
  Tabs,
  TabPane,
  Row,
  Col,
  Icon,
  Input,
  Message,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
} from 'element-ui'
import App from './App'       // 路由挂载
import router from './router/route' // 路由列表
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Pagination)
Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Autocomplete)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Form)
Vue.use(FormItem)

// eslint单行验证
/* eslint-disable no-new */

// 路由
router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 通过vuex state获取当前的token是否存在
    // if (store.state.token) {
    //   console.log(store.state.token)
    //   // 开启Progress
    //   NProgress.start()
    //   next()
    // } else {
    //   next({
    //     path: '/login'
    //     // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //     // query: {redirect: to.fullPath}
    //   })
    // }
    NProgress.start()
    next()
  } else {
    NProgress.start()
    next()
  }
})
// 路由结束
router.afterEach(() => {
  NProgress.done() // 结束Progress
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

