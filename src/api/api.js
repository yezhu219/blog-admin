import {
  post,
  get
} from './http.js'
export default {
  async login(params) {
    return await post('/login', params)
  }
}