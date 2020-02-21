const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// __dirname 表示当前文件所在的路径 
// console.log(path.join(__dirname)) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build
// console.log(path.resolve(__dirname)) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build
// console.log(path.join(__dirname, 'dist')) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build\dist
// console.log(path.resolve(__dirname, 'dist')) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build\dist
// console.log(path.resolve(__dirname)) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build
// console.log(path.join(__dirname, 'static/js/main.js')) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build\static\js\main.js
// console.log(path.resolve(__dirname, 'static/js/main.js')) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\build\static\js\main.js
// console.log(path.join(__dirname, '..', 'static/js/main.js')) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\static\js\main.js
// console.log(path.resolve(__dirname, '..', 'static/js/main.js')) // D:\webpack\html-webpack-plugin\HtmlWebpackPlugin3\vue\static\js\main.js
module.exports = {
  mode: "production", // "production" | "development" | "none"
  devtool: 'source-map', // output mode
  entry: path.resolve(__dirname, '..', 'static/js/main.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'), // path是打包到本地中
    filename: './js/[name].js?[hash]',
    chunkFilename: './js/[name].js?[hash]'
    // publicPath: "http://xxx/" // publicPath是打包到线上指定的服务器中
    /*
      '[name].js // 使用占位符(substitutions)来确保每个文件具有唯一的名称
      为了解决缓存，需要进行md5签名，这时候就需要用到 hash 和 chunkhash等
      使用 hash 对js和css进行签名时，每一次hash值都不一样，从而解决资源缓存问题 
    */
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '该插件是构建一个html文件',
      template: path.resolve(__dirname, '..', 'src/pages/index.html'),
      filename: 'index.html' // 生成html的别名
    })
  ],
  devServer: {
    contentBase: false,
    historyApiFallback: false,
    hot: true,
    quiet: true,
    // 出现错误时，在浏览器中显示全屏覆盖层
    overlay: {
      warnings: false, errors: true
    },
    host: 'localhost',
    port: 8080,
    open: true,
    openPage: 'index.html',
    publicPath: '/'
  }
}; 