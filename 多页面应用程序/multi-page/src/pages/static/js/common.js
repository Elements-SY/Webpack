import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../http'
Vue.use(ElementUI);
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
