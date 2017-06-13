import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 成功的状态码
    ERR_OK: 0,
    // 星星组件
    // 星星个数
    STAR: 5,
    STAR_ON: 'on',
    STAR_HALF: 'half',
    STAR_OFF: 'off'
  }
})
