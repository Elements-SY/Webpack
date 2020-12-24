'use strict'
const path = require('path')
const { BaseUrl } = require('./dev.env')
module.exports = {
  dev: {
    devServer: {
      proxy: {
        '/dev-api': {
          target: BaseUrl,
          pathRewrite: {
            // 拦截 axios请求如果有"/dev-api" 就重写axios url并且代理以"/dev-api"做代理
            '^/dev-api': '/' 
          },
          changeOrigin: true, // target是域名的话，需要这个参数，
          secure: true, // 设置支持https协议的代理
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
      port: 8082,
      open: true,
      publicPath: '/'
    }
  },

}
