const path = require('path');
module.exports = {
  // htmlPath => html相对根目录的路径; jsPath => html文件中的js相对根目录的路径;
  htmlPath: dir => path.join(__dirname, '..', `src/pages${dir}`),
  jsPath: dir => path.join(__dirname, '..', `src/pages/static/js${dir}`),
  faviconPath: dir => path.join(__dirname, '..', `src/pages/assets/image${dir}`),
  iconfontPath: dir => path.join(__dirname, '..', `src/pages/assets/font/iconfont${dir}`)
}
