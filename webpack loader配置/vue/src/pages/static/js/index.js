import '../../assets/font/iconfont/iconfont.css';
import "../css/common.scss";
import "./common.js";
import "../css/index.css";
let el = document.getElementById('main');
console.log(el)
$(document).ready(function () {
  $("button").click(function () {
    alert("我被点击了。");
  });
});