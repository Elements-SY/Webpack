import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../http'
import router from '../router'
// import { getToken } from "../utils/auth";
var getToken = true
var metaRequest;
router.beforeEach((to, from, next) => {
  // console.log(to.path.slice(0, -5))
  if (to.path.slice(0, -5) === '/register' || to.path.slice(0, -5) === '/login') {
    metaRequest = false
  } else {
    metaRequest = true
  }
  // console.log(metaRequest)
  if (metaRequest) {
    if (to.path == "/login.html") {
      next();
      history.go(0)
    } else {
      if (!getToken) {
        next("/login.html");
        history.go(0)
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
