import InterceptorService from "./interceptor.service";
let axios = InterceptorService.LoadAxios();
/**
 * HttpService
 * 请求服务
 */
export default {
    /**
     * axios post 请求
     * @param {*} url 请求地址
     * @param {*} params 请求参数
     */
    post(url, params) {
        return axios({
            method: 'post',
            url: url,
            data: params
        });
    },
    /**
     * axios get 请求 
     * @param {*} url 请求地址
     * @param {*} params 请求参数
     */
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params: params
        });
    }
}