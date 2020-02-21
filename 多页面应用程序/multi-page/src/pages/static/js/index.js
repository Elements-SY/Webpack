import "../../assets/font/iconfont/iconfont.css"
import "../css/common.scss";
import "./common.js";
import "../css/index.css";
import Vue from 'vue';
import Index from '../../template/index.vue'
// 在入口文件里，vue还是照样import ， elementui不用import可以直接使用，
// 这样打包出来的vendor.js就小很多了；
new Vue({
  el: document.querySelector('.index'),
  render: (h) => h(Index)
})
$(document).ready(function () {
  $("button").click(function () {
    alert("我被点击了。");
  });
});