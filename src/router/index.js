import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/backend/index'
import login from '@/page/login'
import register from '@/page/register'
import findPassword from '@/page/findPassword'


import backendRouter from '@/router/backend/index'

Vue.use(Router)

const router = new Router({
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
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword
    },
    {
      path: '/backend',
      name: 'backend',
      component: index,
      children: backendRouter
    }
  ]
})

// router.addRoutes(backend)

export default router