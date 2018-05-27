import EnumService from "./enum.service";
/**
 *  UtilService
 *  工具类
 */
export default {
  /**
   * 添加/修改本地存储
   * @param key 键
   * @param value 值
   */
  SetLocalStorage(key, value) {
    localStorage.setItem(key, value);
  },
  /**
   * 通过键读取本地存储
   * @param key 键
   */
  GetLocalStorage(key) {
    if (key === EnumService.CGT_ALI_USER) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return localStorage.getItem(key);
    }
  },
  /**
   * 通过键删除本地存储
   * @param key 键
   */
  RemoveLocalStorage(key) {
    localStorage.removeItem(key);
  },
  /**
   * 删除所有本地存储
   */
  ClearLocalStorage() {
    localStorage.clear();
  },
  /**
   * 通过键判断本地存储是否存在
   * @param key 键
   */
  IsExistLocalStorage(key) {
    let value = this.GetLocalStorage(key);
    return (value !== null && value !== '');
  }
}
