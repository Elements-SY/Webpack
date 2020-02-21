import "../css/common.scss";
import "./common.js";
import "../css/about.css";
import Vue from 'vue';
import About from '../../template/about.vue'
// 在入口文件里，vue还是照样import ， elementui不用import可以直接使用，
// 这样打包出来的vendor.js就小很多了；
new Vue({
  el: document.querySelector('.about'),
  render: (h) => h(About)
})