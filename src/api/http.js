import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'

// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
Vue.prototype.$static = ''

// 配置接口地址
axios.defaults.baseURL = 'http://www.z.cn/api/v1'
// axios.defaults.baseURL = 'http://118.178.181.177:6302/api/v1'
var loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      lock: true,
      text: '数据加载中，请稍后...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    if (config.method === 'post') {
      if (config.url == '/upLoadImg') {
        config.headers['Content-Type'] = 'multipart/form-data'
        
      } else {
        // config.headers['Content-Type'] = 'application/json'
        config.data = qs.stringify(config.data)
      }
    }
    config.headers.token='abcd'
    return config
  },
  err => {
    loadingInstance.close()
    Message.error('请求错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      loadingInstance.close()
      return res
    } else {
      loadingInstance.close()
      Message.error(res.data.data.msg||'网络错误')
      return res.data
    }
  },
  err => {
    loadingInstance.close()
    Message.error('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)
// post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}

//get请求
export  function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}