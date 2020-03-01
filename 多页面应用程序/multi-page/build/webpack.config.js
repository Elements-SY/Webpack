const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackRules = require('./webpack.config.rules');
var routers = require('../config/router');
module.exports = {
  // // 别名
  // alias: {
  //   '@': path.resolve(__dirname, '..', 'dist') // 使用'@'变量作为src相对路径
  // },
  // 假设通过CDN 引入 外部扩展(externals)，
  // 该配置选项提供了「从输出的 bundle 中排除依赖」的方法而不是把它打包
  externals: {
    // 'jquery': 'jQuery',
    // 'vue': 'Vue',
    // 'vue-router': 'VueRouter',
    // 'element-ui': 'ElementUI',
  },
  // 入口文件
  entry: routers.routerHtmlJs,
  // 出口配置
  output: {
    path: path.resolve(__dirname, '..', 'dist'), // path是打包到本地中
    filename: './js/[name].js?[hash]',
    chunkFilename: './js/[name].js?[hash]'
  },
  module: {
    rules: webpackRules
  },
  plugins: [
    /*
     vue-loader：解析和转换 .vue 文件，
     提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，
     再分别把它们交给对应的 Loader 去处理。
     总结;vue-loader的作用就是提取。
     vue-template-compiler：把 vue-loader 提取出的 HTML 模版编译成对应的可执行的 
     JavaScript 代码，这和 React 中的 JSX 语法被编译成 JavaScript 代码类似。
     预先编译好 HTML 模版相对于在浏览器中再去编译 HTML 模版的好处在于性能更好。
     如果还不明白请百度自行vue-template-compiler的作用
    */
    new VueLoaderPlugin(),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: './css/[name].css?[hash]', //类似出口文件
      // chunkFilename: '[id].css',
    }),
    // 资源拷贝
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', 'src/pages/assets/font'),
        to: path.resolve(__dirname, '..', 'dist/assets/font'),
        ignore: ['.*']
      }
    ]),
    // 压缩css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, //一个正则表达式，指示应优化\最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
      cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano。这应该是一个跟随cssnano.process接口的函数（接收CSS和选项参数并返回一个Promise）。
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
      canPrint: true //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
    }),
    // // provide译为提供的意思。 ProvidePlugin：提供插件
    // // 自动加载模块，而不必到处 import 或 require 。
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    // 打包前清空
    new CleanWebpackPlugin(),//实例化，参数为目录
  ],
  // 优化
  optimization: {
    // 分割块
    splitChunks: {
      // 块
      chunks: 'all',
      // 缓存组 => 分割缓存哪些模块
      cacheGroups: {
        // 打包公共模块
        common: {
          chunks: 'initial', //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少的文件数,也就是必须有两个文件都引入了同一个文件才会提取公共的js或者css
          minSize: 0, //表示提取公共部分最小的大小
          name: 'common', //提取出来的文件命名
          minSize: 0,    // 只要超出0字节就生成一个新包
          // enforce: true,
          // reuseExistingChunk: true
        },
        iconfont: {
          chunks: 'initial',
          test: /iconfont\.js/,
          minChunks: 1,
          minSize: 0,
          name: 'iconfont',
          minSize: 0,
        },
        // jquery: {
        //   name: 'jquery', // 单独将 elementUI 拆包      
        //   priority: 20, // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包   
        //   test: /[\\/]node_modules[\\/]_?jquery(.*)/, // 指定是node_modules下的第三方包
        // },
      }
    },
    // 最小化器=> 目的是用来进一步优化，这里使用第三方插件来做优化
    minimizer: [
      // 译为“简要的JS插件”。该插件用来压缩js
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
  },
  // webpack轻量级服务插件的配置
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
    port: 8081,
    open: true,
    openPage: 'index.html',
    publicPath: '/'
  }
};
// 自动注入
routers.routerHtml.forEach(element => {
  module.exports.plugins.unshift(new HtmlWebpackPlugin(element))
})