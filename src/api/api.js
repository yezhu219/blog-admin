import {
  post,
  get
} from './http.js'
export default {
  async login(params) {
    return await post('/login', params)
  },
  async register(params) {
    return await post('/register', params)
  },
  async checkUserName(params) {
    return await post('/checkUserName',params)
  },
  async getAuthCode(params) {
    return await post('/authCode', params)
  }
}