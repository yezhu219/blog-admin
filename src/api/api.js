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
  }
}