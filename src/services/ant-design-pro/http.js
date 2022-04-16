import { Modal, message } from 'antd'
import request from 'umi-request'
import { history } from 'umi'
// import checkUtils from '@/utils/checkUtils'
// import { cnf } from 'config/configg'

/**
 * request 拦截器
 * name: 接口名称
 * options: 请求参数对象
 */
request.interceptors.request.use(async (name, options) => {
  const token = localStorage.getItem('token') || ''
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
  return {
    url: `https://localhost:44314/${name}`,
    options: { ...options, headers: headers },
  }
})

/**
 * response 拦截器
 * response: 响应体
 */
request.interceptors.response.use(async (res) => {
  const response = await res.clone().json()
  const { code, data } = response
  if (code == 0) {
    return data
  } else if (code == 1) {
    message.error(response.message)
    console.log('[服务端异常]', response.message);
    return 
  } else if (code == 2) {
    message.error(response.message)
    console.log('[客户端异常]', response.message);
    return 
  } else if (code == 10) {
    // 操作成功 提示一下就好
    message.success(response.message)
    return data
  } else if (code == 11) {
    // 需要用户点击确认
    checkUtils.modalInfo(response.message, 11)
    return 
  } else if (code == 12) {
    // 知会弹框 -- 让用户知道
    checkUtils.modalInfo(response.message)
    return 
  } else if (code == 40) {
    if (localStorage.getItem('hasLogin')) {
      checkUtils.modalConfirm()
    }
    return 
  } else {
    message.error(response.message)
    return 
  }
})

// const errorHander = error => {
//     const codeMaps = {
//         1: '服务端异常',
//         2: '客户端异常',
//     }
//     const { response } = error
//     if(response && response.data){
//         const errorText = codeMaps[response.data.code] || response.data.message
//         notification.error({ message: '请求错误', description: errorText })
//     }
// }

// const request = extend({ errorHander })
export default request