const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackRules = require('./webpack.config.rules');
var routers = require('../config/router');
module.exports = {
  mode: "development", // "production" | "development" | "none"
  devtool: 'inline-source-map', // source-map
  entry: routers.routerHtmlJs,
  output: {
    path: path.join(__dirname, '..', 'dist'), // path是打包到本地中
    filename: './js/[name].js?[hash]',
    chunkFilename: './js/[name].js?[hash]'
    // publicPath: "http://xxx/" // publicPath是打包到线上指定的服务器中
    /*
      '[name].js // 使用占位符(substitutions)来确保每个文件具有唯一的名称
      为了解决缓存，需要进行md5签名，这时候就需要用到 hash 和 chunkhash等
      使用 hash 对js和css进行签名时，每一次hash值都不一样，从而解决资源缓存问题 
    */
  },
  module: {
    rules: webpackRules
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css?[hash]', //类似出口文件
      // chunkFilename: '[id].css',
    }),
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/g, //一个正则表达式，指示应优化\最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
    //   cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano。这应该是一个跟随cssnano.process接口的函数（接收CSS和选项参数并返回一个Promise）。
    //   cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
    //   canPrint: true //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
    // }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '..', 'src/pages/assets/font'),
        to: path.resolve(__dirname, '..', 'dist/assets/font'),
        ignore: ['.*']
      }
    ]),
  ],
  // link: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksautomaticnamemaxlength
  optimization: {
    splitChunks: {
      // chunks: 'all',
      // minSize: 30000, // 模块最小体积
      // minChunks: 1, // 模块最小被引用的次数
      // maxAsyncRequests: 5, // 按需加载的最大并行请求数
      // maxInitialRequests: 3, // 一个入口最大并行请求数
      // automaticNameDelimiter: '~', // 文件连接符
      // name: true,
      cacheGroups: {
        // 打包公共模块
        common: {
          chunks: 'initial', //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少的文件数,也就是必须有两个文件都引入了同一个文件才会提取公共的js或者css
          minSize: 0, //表示提取公共部分最小的大小
          name: 'common', //提取出来的文件命名
          // enforce: true,
          // reuseExistingChunk: true
        },
      }
    }
  },
  devServer: {
    contentBase: false,
    historyApiFallback: false,
    hot: true,
    quiet: false,
    // 出现错误时，在浏览器中显示全屏覆盖层
    overlay: {
      warnings: false, errors: true
    },
    host: 'localhost',
    port: 8080,
    open: true,
    openPage: 'index.html',
    publicPath: '/'
  }
};
routers.routerHtml.forEach(element => {
  module.exports.plugins.unshift(new HtmlWebpackPlugin(element))
})