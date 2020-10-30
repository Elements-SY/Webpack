import "../css/common.scss";
import "./common.js";
import "../css/register.css";
import Vue from 'vue';
import Register from '../../template/register.vue'
// 在入口文件里，vue还是照样import ， elementui不用import可以直接使用，
// 这样打包出来的vendor.js就小很多了；
new Vue({
  el: document.querySelector('.register'),
  render: (h) => h(Register)
})