import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
// import getters from './getters';
import state from './state';


Vue.use(Vuex)


export default new Vuex.Store({
  state,
  modules: {
    app,
    user,
    permission
  }
})
