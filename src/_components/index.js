import Vue from "vue";
import Modal from "./modal/index";
import CustomModal from "./customModal/index";
import Tip from "./tip/index";
import Alert from "./alert/index";
import Identify from "./identify/index";

export default {
  LoadComponets() {
    //VueExtend
    Vue.use(Modal);
    Vue.use(CustomModal);
    Vue.use(Tip);
    Vue.use(Alert);
    //Components
    Vue.use(Identify);
  }
}
