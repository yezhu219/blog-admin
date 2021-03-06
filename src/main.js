// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import _ from 'loadsh'
import api from '@/api/api.js'
import store from '../store/index'

// import 'element-ui/lib/theme-chalk/index.css'
import '@/style/theme/index.css'

// 导入css样式
import './assets/css/reset.less'
import './assets/css/resetFram.less'
import './assets/css/public.less'
Vue.use(ElementUI)
console.log(process.env.baseUrl,'VUEiNDEX')
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.prototype._ = _



router.beforeEach((to,form,next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    let token = store.state.token
    if (!token) {
      next('/login')
    }
    next()
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
