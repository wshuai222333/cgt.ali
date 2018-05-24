import Vue from 'vue';
import http from "./http.service";
import util from "./util.service";
import enums from "./enum.service";
/** 
 * 业务服务
 */
export default {
  /**
   * 用户登录
   * @param {any} params 登录参数
   */
  Login(params) {
    let code = params.UserCode;
    if (code === "") {
      Vue.tip('验证码不能为空！');
      return;
    }

    if (util.GetLocalStorage(enums.CGT_IDENTIFY_CODE) !== code.toUpperCase()) {
      Vue.tip('验证码不正确！');
      return;
    }

    http.get('/static/data/userList.json', params).then(response => {
      if (response.data && response.data != null && response.data != undefined) {
        util.SetLocalStorage(enums.CGT_ALI_USER, '');
        util.SetLocalStorage(enums.CGT_ALI_USER, JSON.stringify(response.data));
        Vue.tip("登录成功！");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        Vue.tip("用户不存在或已注销！");
      }
    });
  },
  /**
   * 退出登录
   */
  LoginOut(router) {
    util.RemoveLocalStorage(enums.CGT_ALI_USER);
    router.push('/login');
  },
  /**
   * 获取左侧菜单
   * @param {*} params 请求参数
   */
  GetSidebarList(params) {
    return http.get('/static/data/sidebarList.json', params);
  },
  ImportOrder(params) {
    return http.post('http://localhost:5002/api/ali/Order/ImportOrder', params);
  }
}