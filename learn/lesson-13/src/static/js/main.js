import Vue from 'vue'
import App from '@/pages/App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/font/iconfont/iconfont.css"
import "@/static/css/common.scss"
import "@/static/css/index.scss"
import "../utils/filters"
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
