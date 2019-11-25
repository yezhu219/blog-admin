import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  token:localStorage.getItem('token')||''
}

const mutations = {
  setToken(state, val) {
    state.token=val
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})