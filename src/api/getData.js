import axios from 'axios'
import { Message } from 'element-ui'
// 设置默认选项
// 超出时间
// axios.default.timeout = 5000
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// 发送头数据类型
// axios.defaults.headers.post['Content-Type'] = 'application/json'

// 创建实例时设置配置默认值
const instance = axios.create()
// Alter defaults after instance has been created
instance.defaults.timeout = 5000
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
instance.defaults.headers.post['Content-Type'] = 'application/json'

// 拦截请求
// 添加请求拦截器
axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use((config) => {
  // 发送请求之前要做的事情
  // if (localStorage.getItem('token')) {
  //   config.headers.Authorization = `token ${localStorage.getItem('token')}`.replace(/(^")|("$)/g, '')
  // }
  return config
}, err => {
  // 请求失败报错
  return Promise.reject(err)
})

// axios拦截响应
instance.interceptors.response.use((response) => {
  return response
}, error => {
  // 请求失败报错
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default {
  // 头部获取数据
  getAboutUs(data) {
    return instance.get('/api/aboutUs')
  }
}
