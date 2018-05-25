import Vue from 'vue'
import axios from "axios";
/** 
 * http请求拦截器 axios版本
 * InterceptorService
 */
export default {
  LoadAxios() {
    /** 
     * `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
     * 如果请求话费了超过 `timeout` 的时间，请求将被中断
     * 
     * `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
     * 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
     */
    axios.defaults.timeout = 50000;
    //process.env.NODE_ENV="";
    axios.defaults.baseURL = "";
    /** 
     * 请求拦截
     * http request 拦截器
     */
    axios.interceptors.request.use(
      config => {
        //console.log("request:" + JSON.stringify(config));
        return config;
      },
      error => {
        Vue.tip("request:" + error);
        //console.log("request:" + err);
        return Promise.reject(err);
      }
    );
    /** 
     * 响应拦截
     * http response 拦截器
     */
    axios.interceptors.response.use(
      response => {
        return {
          data: response.data,
          status: response.status
        };
      },
      error => {
        if (error.response) {
          //对请求状态做处理
          let status = error.response.status;
          switch (status) {
            case 401:
              //401  清除token信息并跳转到登录页面
              break;
          }
        }
        //console.log("response:" + error);
        Vue.tip("response:" + error);
        return Promise.reject("response:" + error);
      }
    );
    Vue.prototype.$http = axios;
  }
}
