import { request } from './request' // 引入axios的封装方法
import api from './api'

/** 
* @params p @des 省 @string Y
* @params c @des 市 @string Y
* @params x @des 县 @string N
**/
export const weather = params => {
  // 天气预报
  return request('GET', api.weather, params)
}
