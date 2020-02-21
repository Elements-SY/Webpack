const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
  html-webpack-plugin该插件用于构建一个html文件，在引入该插件之后，new该插件所定义的对象函名，
  并且该函数接收的是一个对象字面量，包含title，template等属性，
  其中template指定的是你哪一个html文件作为打包生成的html文件模板。
  并不是安装html-webpack-plugin之后打包之后就可以生产一个html文件了，
  而是你要指定是哪个html文件作为打包之后生成的html文件
  数指定你生成的文件所依赖哪一个html文件模板
*/
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '该插件是构建一个html文件',
      template: './index.html',
    })
  ]
};