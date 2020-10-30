const path = require('path');
let _path = path.resolve(__dirname, 'dist')
const config = {
  entry: './main.js', // 文件打包入口
  output: { // 文件打包出口
    filename: 'bundle.js', // 打包输出文件的文件名
    // path: path.resolve('F:/scroll', '../scroll/dist'), // 打包输出文件的所在路径
    path: _path
    // 相对该盘符下的绝对路径，
    // 而不是该打包文件webpack.config.js相对某个文件的路径
    // output.path错误的输出写法： 
    // “../、./、../../、../xx、F:\scroll、F:/scroll”
    // output.path正确写法：
    // “ path.resolve('F:/scroll', '/scroll/dist')、path.resolve('F:/scroll', '../scroll/dist')”
    // webpack 默认打包文件到当前目录下，并且声称一个dist文件附有默认的bundle.js文件
    // 输出路径必须是一个相对的完整路径

  }
};

module.exports = config;