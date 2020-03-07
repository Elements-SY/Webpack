// 引入htmlPath => html相对根目录的路径; jsPath => html文件中的js相对根目录的路径;
var publicPath = require('../build/utils');
console.log(publicPath.jsPath('/jquery.js'))
// webpack4 之html-webpack-plugin。 link: https://www.jianshu.com/p/08a60756ffda
module.exports = {
  routerHtmlJs: {
    // jquery: cssPath.jsPath('/jquery.js'),
    iconfont: publicPath.iconfontPath('/iconfont.js'),
    login: publicPath.jsPath('/login.js'),
    register: publicPath.jsPath('/register.js'),
    index: publicPath.jsPath('/index.js'),
    about: publicPath.jsPath('/about.js'),
    notFund: publicPath.jsPath('/notFund.js')
  },
  routerHtml: [{
    title: '登录',
    favicon: publicPath.faviconPath('/favicon.ico'),
    template: publicPath.htmlPath('/login.html'),
    filename: 'login.html',
    chunks: ['login', 'common'],
    minify: { // 压缩
      removeAttributeQuotes: false, // 去掉属性的双引号
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 折叠空白区域 也就是压缩代码
      removeAttributeQuotes: false, // 去除属性引用
    },
  }, {
    title: '注册',
    favicon: publicPath.faviconPath('/favicon.ico'),
    template: publicPath.htmlPath('/register.html'),
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
    favicon: publicPath.faviconPath('/favicon.ico'),
    template: publicPath.htmlPath('/index.html'),
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
    favicon: publicPath.faviconPath('/favicon.ico'),
    template: publicPath.htmlPath('/about.html'),
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
    favicon: publicPath.faviconPath('/favicon.ico'),
    template: publicPath.htmlPath('/notFund.html'),
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