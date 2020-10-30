const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelConfig = require('./babel.config')
let _path = path.resolve(__dirname, 'dist')
const config = {
  entry: {
    regsiter: './src/js/regsiter.js',
    login: './src/js/login.js',
    index: './src/js/index.js',
    home: './src/js/home.js'
  }, // 文件打包入口
  output: { // 文件打包出口
    filename: './js/[name].js?[hash]', // 打包输出文件的文件名
    path: _path
  },
  // 假设通过CDN 引入 外部扩展(externals)，
  // 该配置选项提供了「从输出的 bundle 中排除依赖」的方法而不是把它打包
  externals: {
    'jquery': 'jQuery',
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ElementUI',
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/, // 排除转码node_modules|packages文件中的模块
        test: /\.js$/, // 配置要处理的文件格式，一般使用正则表达式匹配
        use: {
          loader: 'babel-loader', // 使用的加载器名称
          options: babelConfig
        },
      },
      {
        test: /\.(postc|le|sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css?[hash]', //类似出口文件
    }),
    new HtmlWebpackPlugin({
      title: '注册页',
      template: './src/template/regsiter.html',
      filename: 'regsiter.html', // 生成html的别名
      chunks: ['regsiter', 'common'],
    }),
    new HtmlWebpackPlugin({
      title: '登录页',
      template: './src/template/login.html',
      filename: 'login.html',
      chunks: ['login', 'common'],
    }),
    new HtmlWebpackPlugin({
      title: '索引页',
      template: './src/template/index.html',
      filename: 'index.html',
      chunks: ['index', 'common'],
    }),
    new HtmlWebpackPlugin({
      title: '主页',
      template: './src/template/home.html',
      filename: 'home.html',
      chunks: ['home', 'common'],
    })
  ],

  optimization: { // 优化  
    splitChunks: { // 分割块
      chunks: 'all', // 块
      cacheGroups: { // 缓存组 => 分割缓存哪些模块
        common: { // 打包公共模块
          chunks: 'initial', // initial表示提取入口文件的公共部分
          minChunks: 2, // 表示提取公共部分最少的文件数,也就是必须有两个文件都引入了同一个文件才会提取公共的js或者css
          minSize: 0, // 表示提取公共部分最小的大小
          name: 'common', // 提取出来的文件命名
          minSize: 0,    // 只要超出0字节就生成一个新包
          // enforce: true,
          // reuseExistingChunk: true
        },
      }
    },
  },
};

module.exports = config;