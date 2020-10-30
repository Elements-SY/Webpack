import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/view'
// import About from '@/view/about'
const Index = resolve => require(['@/view'], resolve);
const About = resolve => require(['@/view/about'], resolve);

Vue.use(VueRouter)

// 完整路由代码
export default new VueRouter({
  routes: [
    {
      path: '/',
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