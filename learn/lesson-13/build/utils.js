'use strict'
const path = require('path');
exports.assetsPath = {
  // htmlPath => html相对根目录的路径; jsPath => html文件中的js相对根目录的路径;
  htmlPath: dir => path.join(__dirname, '..', `template${dir}`),
  jsPath: dir => path.join(__dirname, '..', `src/static/js${dir}`),
  faviconPath: dir => path.join(__dirname, '..', `src/assets/image${dir}`),
  iconfontPath: dir => path.join(__dirname, '..', `src/assets/font/iconfont${dir}`)
}
