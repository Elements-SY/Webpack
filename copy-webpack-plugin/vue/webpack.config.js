const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    /*
      // CopyWebpackPlugin
      from  定义要拷贝的源文件          from：__dirname+'/src/components'
      to    定义要拷贝到的目标文件夹    to: __dirname+'/dist'
      toType  file 或者 dir           可选，默认是文件
      force   强制覆盖前面的插件        可选，默认是文件
      context                         可选，默认base   context可用specific  context
      flatten  只拷贝指定的文件        可以用模糊匹配
      ignore  忽略拷贝指定的文件       可以模糊匹配
    */
    new CopyWebpackPlugin([
      {
        from: __dirname + '/static',
        to: __dirname + '/dist/images',
        ignore: ['.*']
      },
      {
        from: __dirname + '/text',
        to: __dirname + '/dist/text',
        ignore: ['.*']
      }
    ]),
    new HtmlWebpackPlugin({
      title: '该插件是构建一个html文件',
      template: './index.html',
    })
  ]
};