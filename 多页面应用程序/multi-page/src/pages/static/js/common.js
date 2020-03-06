import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../http'
import routers from '../router'
import Router from 'vue-router'
// import { getToken } from "../utils/auth";
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: routers
})
var getToken = false
router.beforeEach((to, from, next) => { // 在进入
  routers.forEach((val, i, item) => {
    if (val.hasOwnProperty('meta') && val.meta.hasOwnProperty('request') && val.meta.request) {
      to.meta['request'] = true
    }
  })
  if (to.meta.request) {
    if (to.path == "/login.html") {
      next();
    } else {
      if (!getToken) {
        next("/login.html");
        history.go(0) // 刷新当前页面
      } else {
        next();
      }
    }
  } else {
    if (to.path == "/index.html") {
      next("/index.html");
    } else {
      next();
    }
  }
});
Vue.use(ElementUI);
new Vue({
  router,
})
// 全局过滤器
Vue.filter('serType', (val) => {
  console.log('全局过滤器', val)
  switch (val) {
    case '01':
      return '主要按钮'
      break
    case '02':
      return '成功按钮'
      break
    case '03':
      return '信息按钮'
      break
    case '04':
      return '警告按钮'
      break
    case '05':
      return '危险按钮'
      break
    default:
      return '未定义'
      break
  }
})
