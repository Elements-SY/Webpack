const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('./babel.config');
let _path = path.resolve(__dirname, 'dist')
const config = {
  entry: './src/main.js', // 文件打包入口
  output: { // 文件打包出口
    filename: './js/[name].js', // 打包输出文件的文件名
    path: _path
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
      filename: './css/[name].css', //类似出口文件
    }),
    new HtmlWebpackPlugin({
      title: '该插件是构建一个html文件',
      template: './index.html',
      filename: 'A380.html', // 生成html的别名
      chunks: ['main'],
    })
  ]
};

module.exports = config;