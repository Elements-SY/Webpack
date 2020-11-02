import Vue from 'vue'
import App from '@/pages/App.vue'
import router from '@/static/router'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
