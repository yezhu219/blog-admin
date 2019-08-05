import dashboard from '@/page/backend/dashboard'
import article from '@/page/backend/article'
import setting from '@/page/backend/setting'
import crawler from '@/page/backend/crawler'


const backendRouter = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      title: '首页'
    }
  },
  {
    path: 'article',
    name: 'article',
    component: article,
    meta: {
      title: '文章管理'
    }
  },
  {
    path: 'crawler',
    name: 'crawler',
    component: crawler,
    meta: {
      title: '爬取网页'
    }
  },
  {
    path: 'setting',
    name: 'setting',
    component: setting,
    meta: {
      title: '设置'
    }
  },
]


export default backendRouter
