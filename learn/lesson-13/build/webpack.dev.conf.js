'use strict'
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const { baseUrl } = require('../config/dev.env')
const webpackDevConfig = merge(baseWebpackConfig, {
  // webpack轻量级服务插件的配置
  devServer: {
    proxy: {
      '/api': {
        target: baseUrl,
        pathRewrite: {
          '^/api': '/'
        },
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: true,          // 设置支持https协议的代理
      }
    },
    contentBase: path.join(__dirname, "dist"),
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
    publicPath: '/'
  }
})
module.exports = webpackDevConfig;