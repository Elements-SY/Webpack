'use strict'
const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const loaderRules = require('./loaderRules')
const routers = require('../config/router')
const { dev } = require('../config')
const config = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    }
  },
  entry: routers.jsRouter,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].js?[hash]',
    chunkFilename: './js/[name].js?[hash]'
  },
  module: {
    rules: loaderRules,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css?[hash]', //类似出口文件
    }),
    // 资源拷贝
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: path.resolve(__dirname, '../dist/assets'),
        ignore: ['.*']
      }
    ]),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${dev.devServer.port}${dev.devServer.publicPath}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) { },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 102400
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 打包前清空
    new CleanWebpackPlugin(), // 实例化，参数为目录
  ],

  optimization: { // 优化  
    splitChunks: { // 分割块
      chunks: 'all', // 块
      cacheGroups: { // 缓存组 => 分割缓存哪些模块
        vendors: false,
        default: false,
        common: { // 打包公共模块
          chunks: 'initial', // initial表示提取入口文件的公共部分
          minChunks: 2, // 表示提取公共部分最少的文件数,也就是必须有两个文件都引入了同一个文件才会提取公共的js或者css
          minSize: 1, // 表示提取公共部分最小的大小
          name: 'common', // 提取出来的文件命名
          minSize: 1,    // 只要超出0字节就生成一个新包
        },
      }
    },
  },
};
// 自动注入
routers.htmlRouter.forEach(element => {
  config.plugins.unshift(new HtmlWebpackPlugin(element))
})
module.exports = config;