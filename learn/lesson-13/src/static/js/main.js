import Vue from 'vue'
import App from '@/pages/App.vue'
<<<<<<< HEAD
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/font/iconfont/iconfont.css"
import "@/static/css/common.scss"
import "@/static/css/index.scss"
import "../utils/filters"
Vue.use(ElementUI)
=======
import router from '@/static/router'
>>>>>>> 45fdf6ddcc9cbf9a18b40db305f553118314f34e
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
