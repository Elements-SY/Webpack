import axios from 'axios'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import { Loading, Message } from 'element-ui'
// import { getToken } from "@/static/utils/auth";
let APIHOST;
axios.defaults.baseURL = APIHOST
axios.defaults.timeout = 10000
// console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    APIHOST = '/api'
    break
  // 测试环境
  case 'testing':
    APIHOST = 'https://api.6vzz.com/'
    break
  // 生产环境
  default:
    APIHOST = 'https://api.6vzz.com/'
    break
}
console.log(APIHOST)
const options = {
  text: 'Loading. . .'
}
let _loading;
var _errorMessage;
axios.interceptors.request.use(
  config => {
    // NProgress.start()
    _loading = Loading.service(options)
    return config
  },
  error => {
    // NProgress.done()
    Message({
      message: '请求失败',
      type: 'error',
      duration: 1500,
      showClose: true
    })
    _loading.close()
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  res => {
    // NProgress.done()
    Message.closeAll()
    _loading.close()
    return res
  },
  error => {
    // NProgress.done()
    console.log('状态码', error.response.status);
    if (error && error.response.status) {
      switch (error.response.status) {
        case 400:
          _errorMessage = '错误请求'
          break;
        case 401:
          _errorMessage = '未授权,请重新登录'
          break;
        case 403:
          _errorMessage = '拒绝访问'
          break;
        case 404:
          _errorMessage = '请求的资源没有找到'
          break;
        case 405:
          _errorMessage = '错误方法未允许'
          break;
        case 408:
          _errorMessage = '错误超时'
          break;
      }
    }
    Message({
      message: _errorMessage,
      type: 'error',
      duration: 1500,
      showClose: true
    })
    _loading.close()
    return Promise.reject(error)
  }
)

// API method 封装
export const request = function (method, url, params) {
  // var token = "";
  // if (getToken("userInfo") !== undefined) {
  //   token = JSON.parse(getToken("userInfo")).api_token;
  // }
  const config = {
    baseURL: APIHOST,
    method: method.toLocaleUpperCase() || 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`
    }
    // transformRequest: [
    //   data =>
    //     Object.entries(data)
    //       .map(kv => `${kv[0]}=${kv[1]}`)
    //       .join('&')
    // ]
  }
  if (method.toLocaleUpperCase() === 'GET' || method.toLocaleUpperCase() === 'DELETE') {
    config.params = params
  } else {
    config.data = params
  }
  if (!config.url) {
    return
  }
  config.data = config.data || {}
  if (config.method === 'DELETE') {
    config.data = {}
  }
  return axios(config)
}
