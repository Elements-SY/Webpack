'use strict'
// 引入htmlPath => html相对根目录的路径; jsPath => html文件中的js相对根目录的路径;
const { assetsPath } = require('../build/utils');
/**
 * @pluginName html-webpack-plugin
 * @link https://www.webpackjs.com/plugins/html-webpack-plugin/
 */
module.exports = {
  jsRouter: {
    // jquery: cssPath.jsPath('/jquery.js'),
    main: assetsPath.jsPath('/main.js'),
  },
  htmlRouter: [
    {
      title: '首页',
      favicon: assetsPath.faviconPath('/favicon.ico'),
      template: assetsPath.htmlPath('/index.html'),
      filename: 'index.html',
      chunks: ['main', 'common'],
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