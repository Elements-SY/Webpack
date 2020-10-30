import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/notFound',
      name: 'notFound',
      meta: {
        request: true
      },
    },
    {
      path: '/register',
      name: 'register',
    },
    {
      path: '/login',
      name: 'login',
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        request: true
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        request: true
      },
    },
  ]
})
