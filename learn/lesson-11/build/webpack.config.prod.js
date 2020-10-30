const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const babelConfig = require('../babel.config')
const webpack = require('webpack')
const config = {
  // 假设通过CDN 引入 外部扩展(externals)，
  // 该配置选项提供了「从输出的 bundle 中排除依赖」的方法而不是把它打包
  // externals: {
  //   'jquery': 'jQuery',
  //   'vue': 'Vue',
  //   'vue-router': 'VueRouter',
  //   'element-ui': 'ElementUI',
  //   'iview': 'iview'
  // },
  resolve: {
    // 引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    // 缩写扩展
    alias: {
      // 正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
      'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
      // 用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
      '@': path.resolve(__dirname, '../src'),
    }
  },
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  }, // 文件打包入口
  output: { // 文件打包出口
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].js?[hash]', // 打包输出文件的文件名
    // chunkFilename: './js/[name].js?[hash]' // 该API 是给被打包文件异步引入文件时，打包生成出来的序列文件标识哈希值
    // 如果打包没有没有序列文件也不影响使用
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
          'sass-loader',
          // 'vue-style-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
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
     在 vue 工程中，安装依赖时，需要 vue 和 vue-template-compiler 版本必须保持一致。
     如果还不明白请百度自行vue-template-compiler的作用
    */
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css?[hash]', //类似出口文件
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成html的别名
      template: path.resolve(__dirname, '../index.html'),
      chunks: ['main'],
      inject: true, // 是否引入打包资源
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeAttributeQuotes: true
      // },
    }),
    // 资源拷贝
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: path.resolve(__dirname, '../dist/assets'),
        ignore: ['.*']
      }
    ]),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 102400
    }),
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

module.exports = config;