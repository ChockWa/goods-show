import wepy from 'wepy';

const baseUrl = 'http://106.12.161.232:17989'
// const baseUrl = 'http://127.0.0.1:17989'
/**
 * 供外部post请求调用
 */
const post = (url, params) => request(url, params, "POST")

/**
 * 供外部get请求调用
 */
const get = (url, params) => request(url, params, "GET")

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onStart 开始请求,初始加载loading等处理
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */
const request = async (url, params, method) => {
  wepy.showLoading({ title: '加载中' })
  let res = await wepy.request({
    url: baseUrl + url,
    data: dealParams(method, params),
    method: method,
    header: { 'content-type': 'application/json', 'BeautyT': wepy.getStorageSync('BeautyT') }
  })
  wepy.hideLoading()
  if (res.statusCode === 200) {
    return res.data
  } else {
    return null
  }
  // if (res.data) {
  //   if (res.data.code === 1001 || res.data.code === 1002) {
  //     wepy.reLaunch({
  //       url: 'pages/login/login'
  //     })
  //   } else if (res.data.code === 9999) {
  //     wepy.showModal({
  //       title: '提示',
  //       content: '系统错误，请重新再试',
  //       success: function (res) {
  //       }
  //     })
  //   } else if (res.data.code === 0) {
  //     console.log("0000000")
  //     return res.data.data
  //   } else {
  //     wepy.showModal({
  //       title: '提示',
  //       content: res.data.msg,
  //       success: function (res) {
  //       }
  //     })
  //   }
  // }
  // return null
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(method, params) {
  if ('GET' === method) {
    return params
  } else {
    return JSON.stringify(params)
  }
}

module.exports = {
  postRequest: post,
  getRequest: get,
}

// const baseUrl = 'http://127.0.0.1:17989'
// /**
//  * 供外部post请求调用
//  */
// function post(url, params) {
//   return request(url, params, "POST");
// }

// /**
//  * 供外部get请求调用
//  */
// function get(url, params) {
//   return request(url, params, "GET");
// }

// /**
//  * function: 封装网络请求
//  * @url URL地址
//  * @params 请求参数
//  * @method 请求方式：GET/POST
//  * @onStart 开始请求,初始加载loading等处理
//  * @onSuccess 成功回调
//  * @onFailed  失败回调
//  */
// function request(url, params, method) {
//   return new Promise((resolve, reject) => {
//     wx.showLoading({ title: '加载中', })
//     wx.request({
//       url: baseUrl + url,
//       data: dealParams(method, params),
//       method: method,
//       header: { 'content-type': 'application/json', 'BeautyT': wepy.getStorageSync('BeautyT') },
//       success: function (res) {
//         if (res.data) {
//           wx.hideLoading()
//           if (res.data.code === 1001 || res.data.code === 1002) {
//             wx.reLanch({
//               url: 'pages/authorize'
//             })
//           } else if (res.data.code === 9999) {
//             wx.showModal({
//               title: '提示',
//               content: '系统错误，请重新再试',
//               success: function (res) {
//               }
//             })
//             reject("系统错误,请重新再试")
//           } else if (res.data.code === 0) {
//             resolve(res.data.data)
//           } else {
//             wx.showModal({
//               title: '提示',
//               content: res.data.msg,
//               success: function (res) {
//               }
//             })
//             reject(res.data.msg)
//           }
//         }
//       },

//       fail: function (error) {
//         wx.showModal({
//           title: '提示',
//           content: '系统错误',
//           success: function (res) {
//             if (res.confirm) {
//             } else if (res.cancel) {
//             }
//           }
//         })
//         reject("系统错误")
//       }
//     })
//   })
// }

// /**
//  * function: 根据需求处理请求参数：添加固定参数配置等
//  * @params 请求参数
//  */
// function dealParams(method, params) {
//   if ('GET' === method) {
//     return params
//   } else {
//     return JSON.stringify(params)
//   }
// }

// module.exports = {
//   postRequest: post,
//   getRequest: get,
// }
// import tip from './tip'

// const baseUrl = 'http://127.0.0.1:17989'

// const wxRequest = async(params = {}, method, url) => {
//   tip.loading();
//   let data = params.query || {};
//   let res = await wepy.request({
//       url: baseUrl + url,
//       method: method,
//       data: data,
//       header: { 'Content-Type': 'application/json', 'BeautyT': wepy.getStorageSync('BeautyT') },
//   });
//   tip.loaded();
//   console.log(res)
//   return res;
// };


// module.exports = {
//   wxRequest
// }