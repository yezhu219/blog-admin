import dashboard from '@/page/backend/dashboard'
import article from '@/page/backend/article'
import setting from '@/page/backend/setting'
import crawler from '@/page/backend/crawler'
import articleClassify from '@/page/backend/articleClassify'
import exportExcelDemo from '@/page/backend/exportExcelDemo'


const backendRouter = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      title: '看板'
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
  {
    path: 'articleClassify',
    name: 'articleClassify',
    component: articleClassify,
    meta: {
      title: '文章标签'
    }
  },
  {
    path: 'exportExcelDemo',
    name: 'exportExcelDemo',
    component: exportExcelDemo,
    meta: {
      title: 'excel导入导出'
    }
  },

]


export default backendRouter