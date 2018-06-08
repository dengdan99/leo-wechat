import { getCookie } from 'libs/tools'
import axios from 'axios'
import Qs from 'qs'

var instance = axios.create({
  // 请求方法
  method: 'get',

  // 基础url前缀
  baseURL: process.env.VUE_APP_API_HOST,

  // transformRequest: [function (data) {
  //   data['token'] = getToken()
  //   // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等
  //   data = Qs.stringify(data)
  //   return data
  // }],

  transformResponse: [function (data) {
    // 这里提前处理返回的数据
    if (typeof data.code !== 'number') {
      data.code = parseInt(data.code)
    }
    return data
  }],

  // 请求头信息
  headers: {
  },

  // parameter参数
  params: {
  },

  // post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {
  },

  // 设置超时时间
  timeout: 10000,

  // 返回数据类型
  responseType: 'json' // default
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const token = getCookie('token') || null
  const spm = getCookie('spm') || null
  // config.headers.Authorization = `token ${token}`;
  // post
  if(config.method  === 'post'){
    if (token) config.data['token'] = token
    if (spm) config.data['spm'] = spm
    config.data = Qs.stringify(config.data)
    return config
  }

  // get
  if (typeof config.params === 'undefined') config.params = {}
  if (token) config.params['token'] = token
  if (spm) config.params['spm'] = spm
  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  let _res = response
  // if (_res.data.code === 404) {
  //   window.location.hash = '/404'
  //   return _res
  // }
  return _res
}, function (error) {
  return Promise.reject(error)
})

export default instance
