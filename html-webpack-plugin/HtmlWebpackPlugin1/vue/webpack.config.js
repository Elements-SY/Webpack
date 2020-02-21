const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
  html-webpack-plugin该插件用于构建一个html文件，在引入该插件之后，new该插件所定义的对象函名，
  并且该函数接收的是一个对象字面量，包含title，template等属性，
  其中template指定的是你哪一个html文件作为打包生成的html文件模板。
  并不是安装html-webpack-plugin之后打包之后就可以生产一个html文件了，
  而是你要指定是哪个html文件作为打包之后生成的html文件
  数指定你生成的文件所依赖哪一个html文件模板。
  HtmlWebpackPlugin 文档说明
  template: path.resolve(__dirname,'./public/index.html'), // 模版路径
  filename: 'index.html', // 打包后的文件名
  title: 'webpack4.0', // 顾名思义，设置生成的 html 文件的标题。注入选项。
  有四个选项值 true, body, head, false true 默认值，
  script标签位于html文件的body 底部body 同 true head script 标签位于 head 标签内，
  false 不插入生成的 js 文件，只是单纯的生成一个 html 文件
  inject: true, 
  favicon: 'xxx.ico' // 给生成的 html 文件生成一个 favicon
  minify: { // 压缩
    removeAttributeQuotes: true, // 去掉属性的双引号
    removeComments: true, //移除HTML中的注释
    collapseWhitespace: true, //折叠空白区域 也就是压缩代码
    removeAttributeQuotes: true, //去除属性引用
  },
  hash: true, // hash选项的作用是 给生成的 js 文件一个独特的 hash 值，该 hash 值是该次 webpack 编译的 hash 值
  cahe: true, // 默认值是 true。表示只有在内容变化时才生成一个新的文件
  showErrors: true, // 如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true 
  chunks 选项的作用主要是针对多入口(entry)文件。当你有多个入口文件的时候，对应就会生成多个编译后的 js 文件，
  那么 chunks 选项就可以决定是否都使用这些生成的 js 文件。
  chunks 默认会在生成的 html 文件中引用所有的 js 文件，当然你也可以指定引入哪些特定的文件。
  chunks: ['index','commons'], // 这个是必须要加的，第一个参数是当前html模板引入的js和css的名字，
  第二个参数是公共的css和js的名字，如果不加这个那么所有的html文件都会引入所有的css和js文件
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