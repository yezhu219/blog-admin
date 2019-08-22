import {
  post,
  get
} from './http.js'
export default {
  //登录
  async login(params) {
    return await post('/login', params)
  },
  //注册
  async register(params) {
    return await post('/register', params)
  },
  //检测用户名是否可用
  async checkUserName(params) {
    return await post('/checkUserName',params)
  },
  //发送邮箱验证码
  async getAuthCode(params) {
    return await post('/authCode', params)
  },
  //验证邮箱验证码
  async checkAuthCode(params) {
    return await post('/checkAuthCode',params)
  },
  // 获取文章列表
  async getArticleList(params) {
    return await get('/articleList',params)
  },
  // 文章详情
  async getArticleDetail(params) {
    return await get('/detail',params)
  },
  //图片上传
  async upLoadImg(params) {
    return await post('/upLoadImg',params)
  },
   //图片上传
  async updateArticle(params) {
    return await post('/updateArticle', params)
  },
  //模糊搜索
  async search(params) {
    return await get('/search', params)
  },
  //添加分类
  async addClassify(params) {
    return await post('/addClassify', params)
  },
  //获取分类
  async getClassify(params) {
    return await get('/getClassify', params)
  },
  //删除分类
  async delClassify(params) {
    return await post('/delClassify', params)
  },
  //编辑分类
  async editeClassify(params) {
    return await post('/editeClassify', params)
  },
}