import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login'
import register from '@/page/register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
     
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name:'index',
      component:index
    }
  ]
})
