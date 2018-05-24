import {
  Validator
} from 'vee-validate';

export default {
  /** 
   * 基本配置
   */
  config: {
    aria: true,
    classNames: {},
    classes: false,
    delay: 0,
    dictionary: null,
    errorBagName: 'errors', // change if property conflicts
    events: 'input|blur',
    fieldsBagName: 'fields',
    i18n: null, // the vue-i18n plugin instance
    i18nRootKey: 'validations', // the nested key under which the validation messsages will be located
    inject: true,
    locale: 'zh_CN',
    strict: true,
    validity: false,
  },
  /**
   * 验证字段是否为空
   */
  isNullValidate: () => {
    Validator.localize({
      zh_CN: {
        messages: {
          required: function (name) {
            return document.getElementsByName(name)[0].title + "不能为空！";
          }
        }
      }
    });
  },
  /**
   * 邮箱验证
   */
  emailValidate: () => {
    Validator.extend('email', {
      getMessage: () => {
        return "邮箱格式不正确！";
      },
      validate: (value) => {
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value);
      }
    });
  },
  phoneValidate: () => {
    Validator.extend('phone', {
      getMessage: () => {
        return "手机号格式不正确！";
      },
      validate: (value) => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
      }
    });
  }
}
