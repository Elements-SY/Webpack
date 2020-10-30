import Vue from 'vue'
Vue.filter('serType', (val) => {
  switch (val) {
    case 1:
      return '数字'
      break
    case 2:
      return '文本'
      break
    default:
      return '未定义'
      break
  }
})