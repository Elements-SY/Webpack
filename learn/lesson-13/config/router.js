'use strict'
// 引入htmlPath => html相对根目录的路径; jsPath => html文件中的js相对根目录的路径;
const { assetsPath } = require('../build/utils');
/**
 * @pluginName html-webpack-plugin
 * @link https://www.webpackjs.com/plugins/html-webpack-plugin/
 */
module.exports = {
  routerHtmlJs: {
    // jquery: cssPath.jsPath('/jquery.js'),
    iconfont: assetsPath.iconfontPath('/iconfont.js'),
    login: assetsPath.jsPath('/login.js'),
    register: assetsPath.jsPath('/register.js'),
    index: assetsPath.jsPath('/index.js'),
    about: assetsPath.jsPath('/about.js'),
    notFund: assetsPath.jsPath('/notFund.js')
  },
  routerHtml: [
    {
      title: '登录',
      favicon: assetsPath.faviconPath('/favicon.ico'),
      template: assetsPath.htmlPath('/login.html'),
      filename: 'login.html',
      chunks: ['login', 'common'],
      minify: { // 优化
        removeAttributeQuotes: false, // 移除属性双引号
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 折叠空白区域 => 减少空字节 => 压缩代码
        removeAttributeQuotes: false, // 移除属性引用
      },
    }, {
      title: '注册',
      favicon: assetsPath.faviconPath('/favicon.ico'),
      template: assetsPath.htmlPath('/register.html'),
      filename: 'register.html',
      chunks: ['register', 'common'],
      minify: {
        removeAttributeQuotes: false,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
      },
      inject: 'body',
      hash: false,
      cache: false,
      showErrors: true,
      chunksSortMode: "auto",
      xhtml: false
    }, {
      title: '首页',
      favicon: assetsPath.faviconPath('/favicon.ico'),
      template: assetsPath.htmlPath('/index.html'),
      filename: 'index.html',
      chunks: ['index', 'common'],
      minify: {
        removeAttributeQuotes: false,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
      },
      inject: 'body',
      hash: false,
      cache: false,
      showErrors: true,
      chunksSortMode: "auto",
      xhtml: false
    }, {
      title: '关于',
      favicon: assetsPath.faviconPath('/favicon.ico'),
      template: assetsPath.htmlPath('/about.html'),
      filename: 'about.html',
      chunks: ['about', 'common'],
      minify: {
        removeAttributeQuotes: false,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
      },
      inject: 'body',
      hash: false,
      cache: false,
      showErrors: true,
      chunksSortMode: "auto",
      xhtml: false
    }, {
      title: '404',
      favicon: assetsPath.faviconPath('/favicon.ico'),
      template: assetsPath.htmlPath('/notFund.html'),
      filename: 'notFund.html',
      chunks: ['notFund', 'common'],
      minify: {
        removeAttributeQuotes: false,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
      },
      inject: 'body',
      hash: false,
      cache: false,
      showErrors: true,
      chunksSortMode: "auto",
      xhtml: false
    }
  ]
}