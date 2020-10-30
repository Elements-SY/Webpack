const path = require('path');
let _path = path.resolve(__dirname, 'dist')
const config = {
  entry: './src/main.js', // 文件打包入口
  output: { // 文件打包出口
    filename: 'main.js', // 打包输出文件的文件名
    path: _path
  }
};

module.exports = config;