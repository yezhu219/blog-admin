import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token')?localStorage.getItem('token'):''
  },
  mutations: {
    setToken(state,data) {
      state.token = data
      localStorage.setItem('token',data)
    }
  }
})


export default store