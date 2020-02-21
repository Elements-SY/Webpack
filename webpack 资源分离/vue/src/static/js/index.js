import '../../assets/font/iconfont/iconfont.css';
import '../css/common.scss';
import '../css/index.css';
import './common.js';
let el = document.getElementById('main');
console.log(el)
$(document).ready(function () {
  $("p").click(function () {
    alert("段落被点击了。");
  });
});