import Vue from 'vue'
import xss from 'xss'

Object.defineProperty(Vue.prototype, '$xss', {
    value: xss
})
/**
 * @title xss.js
 * @describe xss是一个用于对用户输入的内容进行过滤，以避免遭受 XSS 攻击的模块
 * @link https://www.npmjs.com/package/xss
 * 如何使用? 引入当前 xss.js文件将数据传给$xss方法即可
 * */

/*
案列如下：
<p v-html="$xss(test)"></p>

<script>
export default {
  data() {
    return {
       test: `<a onclick='alert("xss攻击")'>链接</a>`
    }
  },
}
</script>

*/