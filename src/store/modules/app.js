import Cookies from 'js-cookie'

const app = {
  state: {
    // 请求接口0为可用
    STATUS: 0,
    INTERVAL: 0.6,
    NEWSINTERVAL: 3,
    VALIDTYPE: {
      'require': /[\w\W]+/,
      'password': /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/,
      'postcode': /^[0-9]{6}$/,
      'username': /^[a-zA-Z][a-zA-Z\u4E00-\u9FA5]{5,17}$/,
      'phone': /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
      'email': /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      'url': /^(\w+:\/\/)?\w+(\.\w+)+.*$/
    },
    TIME: 60
  },
  mutations: {},
  actions: {}
}

export default app
