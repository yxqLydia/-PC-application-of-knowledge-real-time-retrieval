// 发给知识库p 200.19
import axios from 'axios'
import {
  Message
} from 'element-ui'
// import store from '@/store'
import getGlobalParams from '../../static/globalParams'
// import {
//   getToken,
//   setToken,
//   getUserId
// } from '@/utils/auth'
import toolBox from './toolBox'
import creatHashCode from './hashCode'

// 创建axios实例
const service = axios.create({
  baseURL: getGlobalParams.communicationAddressKnow, // api的base_url
  timeout: getGlobalParams.communicationTimeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  config.method = 'post';
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  config.data = {
    SYS_HEAD: {
      TransServiceCode: config.TransServiceCode,
      RequestDate: toolBox.getNowDate(0),
      RequestTime: toolBox.getNowTime(),
      ConsumerSeqNo: new Date().getFullYear() + '' + (new Date().getMonth() + 1) + '' + new Date().getDate() + '' + creatHashCode.gethashcode(), // 这里暂时随便输入//ConsumerSeqNo: new Date().toLocaleString().split(' ')[0] + '|' + creatHashCode.gethashcode(), // 这里暂时随便输入
      ConsumerId: '1001'
    },
    APP_HEAD: {
      Operator: 'admin'
    },
    REQ_BODY: config.data
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    /**
     * 状态码
     * 000000:成功状态码
     * CIC027:token校验失败
     *  :token已过期
     */
    if (res && res.SYS_HEAD.ReturnCode === '000000') {
      // if (res && res.SYS_HEAD.aumsToken === '') {
      //   MessageBox.confirm('非法的token，系统将立即退出', '系统提示', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     showCancelButton: false,
      //     showClose: false,
      //     closeOnClickModal: false,
      //     closeOnPressEscape: false,
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //     return
      //   })
      // }
      // const headData = res.SYS_HEAD
      // if (headData.aumsToken) {
      //   setToken(headData.aumsToken)
      // }
      // // 江南这里的普通通信不带token 所以这里有问题  需要修改
      return response.data
    } else {
      return response.data;
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // return Promise.reject(error)
  }
)

export default service
