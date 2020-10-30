const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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