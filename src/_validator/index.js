import Vue from 'vue'
import VeeValidate from 'vee-validate';
import Validator from "./validator";

export default {
  LoadValidator() {
    Validator.isNullValidate();
    Validator.emailValidate();
    Validator.phoneValidate();
    Vue.use(VeeValidate, Validator.config);
  }
}
