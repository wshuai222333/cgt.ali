import Vue from 'vue'
import datePickerDirective from "./date-picker-directive";


export default {
    LoadDirectives() {
      Vue.use(datePickerDirective);
    }
  }
  