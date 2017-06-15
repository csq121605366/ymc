import Vue from 'vue'
import Vuex from 'vuex'

// 页面静态资源表

Vue.use(Vuex)
import state from './state'
import getters from './getters'
import actions from './action'
import mutations from './mutations'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
