import Vue from 'vue'
import App from './App.vue'
import router from './router'
// const router = () => import('./router')
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
