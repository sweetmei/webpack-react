/*
 * @Author: your name
 * @Date: 2021-04-07 10:55:33
 * @LastEditTime: 2021-04-26 13:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\pages\utils\request.js
 */

import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep'
//请求拦截
axios.interceptors.request.use(config => {
  //获取本地得token
  let res = JSON.parse(localStorage.getItem('userToken'));
  if (res) {
    // console.log(res); 如果是登陆接口不带token
    //  Authorization得格式是[type] + [拼接的base64]
    config.headers.Authorization = 'Bearer ' + res;
  }
  // 请求拦截规范化
  if (config.method == 'post' || config.method == 'put' || config.method == 'patch') {
    config.params = {};
  }
  return config
},
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  export default function request (options) {
    let { data, url, method = 'get' } = options;
    // 这里是lodash方法中得深克隆。如果是浅赋值得话，会跟随变量改变
    let cloneData = cloneDeep( data );
    try {

    }catch {
      
    }
  }