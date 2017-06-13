import axios from 'axios'
// 设置默认选项
// 超出时间
axios.default.timeout = 5000
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
    // 发送头数据类型
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 创建实例时设置配置默认值
const instance = axios.create()
    // Alter defaults after instance has been created
    // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
    // instance.defaults.headers.post['Content-Type'] = 'application/json'

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
}, err => {
    // 请求失败报错
  return Promise.reject(err)
})

export default {
    // 用户注册
  getSeller(data) {
    return instance.get('/api/seller', data)
  },
  getGoods(data) {
    return instance.get('/api/goods', data)
  },
  getRatings(data) {
    return instance.get('/api/ratings', data)
  },
  getRandom(data) {
    return instance.get('/api/random', data)
  }
}
