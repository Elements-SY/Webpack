import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// 正则表达式
export const formRules = {
  mobile: /^1(3|4|5|6|7|8|9)\d{9}$/ // 手机号码
}