import Vue from 'vue'
import Router from 'vue-router'

// 普通加载
// import goods from '../components/goods/goods'
// import seller from '../components/seller/seller'
// import ratings from '../components/ratings/ratings'

// 单项懒加载
const home = r => require(['../components/home/home'], r)
const about = r => require(['../components/about/about'], r)
// const ratings = r => require(['../components/ratings/ratings'], r)

// 分组懒加载
// const goods = r => require.ensure([], () => r(require('../components/goods/goods')), 'body')
// const seller = r => require.ensure([], () => r(require('../components/seller/seller')), 'body')
// const ratings = r => require.ensure([], () => r(require('../components/ratings/ratings')), 'body')

// 路由懒加载
// const Foo = resolve => require(['./Foo.vue'], resolve)

// 使用别名
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: home},
    {path: '/aboutUs', component: about},
    {path: '*', redirect: '/'}
  ]
})
