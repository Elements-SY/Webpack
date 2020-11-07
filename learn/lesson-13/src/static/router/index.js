import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/pages'
// import About from '@/pages/about'
const Index = resolve => require(['@/pages'], resolve);
const About = resolve => require(['@/pages/about'], resolve);

Vue.use(VueRouter)

// 完整路由代码
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/about',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})