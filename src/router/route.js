import Vue from 'vue'
import Router from 'vue-router'

// 普通加载
// import goods from '../components/goods/goods'
// import seller from '../components/seller/seller'
// import ratings from '../components/ratings/ratings'

// layout
const layout = r => require(['../pages/layout'], r)
// 单项懒加载
const home = r => require(['../pages/home'], r)
const aboutUs = r => require(['../pages/aboutUs'], r)
// 用户医生登录登录
const nubrace = r => require(['../pages/nubrace/nubrace'], r)
const generalLogin = r => require(['../pages/nubrace/general'], r)
const doctorLogin = r => require(['../pages/nubrace/doctor'], r)
const retrieve = r => require(['../pages/nubrace/retrieve'], r)
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
    {
      path: '/',
      component: layout,
      name: 'home',
      redirect: '/home',
      // meta: {
      //   requireAuth: true
      // },
      children: [{
        path: 'home',
        component: home
      }, {
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUs
      }]
    },
    // 登录路由
    {
      path: '/nubrace',
      name: 'nubrace',
      redirect: '/nubrace/general',
      component: nubrace,
      children: [
        {
          path: 'general',
          name: 'generalLogin',
          component: generalLogin
        },
        {
          path: 'doctor',
          name: 'doctorLogin',
          component: doctorLogin
        },
        {
          path: 'retrieve',
          name: 'retrieve',
          component: retrieve
        }
      ]
    },
    {path: '*', redirect: '/home'}
  ]
})

// export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: layout,
//     redirect: '/permission/index',
//     name: '权限测试',
//     icon: 'quanxian',
//     meta: {role: ['admin']},
//     noDropdown: true,
//     children: [{path: 'index', component: Permission, name: '权限测试页', meta: {role: ['admin']}}]
//   },
//   {path: '*', redirect: '/404', hidden: true}
// ]
