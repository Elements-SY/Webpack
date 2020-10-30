import "../css/common.scss";
import "./common.js";
import "../css/login.css";
import Vue from 'vue';
import Login from '../../template/login.vue'
new Vue({
  el: document.querySelector('.login'),
  render: (h) => h(Login)
})