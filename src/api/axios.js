
/* 1.引入文件 */
import axios from 'axios' // 引入 axios库

let baseURL
// 判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') { // 开发环境
  baseURL = '/api' // 设置的本地代理请求（跨域代理）
} else { // 编译环境
  if (process.env.type === 'test') { // 测试环境
    baseURL = '/api' + '/hcd/'
  } else { // 正式环境
    baseURL = 'http://pub.sxhcd.xyz'
  }
}
axios.defaults.timeout = 6000 // 请求超时时间1分钟
axios.defaults.baseURL = baseURL // 你的接口地址
axios.defaults.responseType = 'json'
axios.defaults.withCredentials = false

export default axios
