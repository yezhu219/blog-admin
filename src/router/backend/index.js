import dashboard from '@/page/backend/dashboard'
import article from '@/page/backend/article'
import setting from '@/page/backend/setting'
import crawler from '@/page/backend/crawler'
import articleClassify from '@/page/backend/articleClassify'
import exportExcelDemo from '@/page/backend/exportExcelDemo'
import editeArticle from '@/page/backend/editeArticle'
import search from '@/page/backend/search'
import toImg from '@/page/backend/toImg'
import power from '@/page/backend/power'
import userInfo from '@/page/backend/userInfo'


const backendRouter = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      title: '看板',
      requireAuth: true
    }
  },
  {
    path: 'article',
    name: 'article',
    component: article,
    meta: {
      title: '文章管理',
      requireAuth: true
    }
  },
  {
    path: 'crawler',
    name: 'crawler',
    component: crawler,
    meta: {
      title: '爬取文章',
      requireAuth: true
    }
  },
  {
    path: 'setting',
    name: 'setting',
    component: setting,
    meta: {
      title: '设置',
      requireAuth: true
    }
  },
  {
    path: 'articleClassify',
    name: 'articleClassify',
    component: articleClassify,
    meta: {
      title: '文章标签',
      requireAuth: true
    }
  },
  {
    path: 'exportExcelDemo',
    name: 'exportExcelDemo',
    component: exportExcelDemo,
    meta: {
      title: 'excel导入导出',
      requireAuth: true
    }
  },
  {
    path: 'editeArticle',
    name: 'editeArticle',
    component: editeArticle,
    meta: {
      title: '编辑文章',
      requireAuth: true
    }
  },
  {
    path: 'search',
    name: 'search',
    component: search,
    meta: {
      title: '搜索',
      requireAuth: true
    }
  },
  {
    path: 'toImg',
    name: 'toImg',
    component: toImg,
    meta: {
      title: '截图',
      requireAuth: true
    }
  },
  {
    path: 'power',
    name: 'power',
    component: power,
    meta: {
      title: '用户管理',
      requireAuth: true
    }
  },
  {
    path: 'userInfo',
    name: 'userInfo',
    component: userInfo,
    meta: {
      title: '个人资料',
      requireAuth: true
    }
  },
]


export default backendRouter
