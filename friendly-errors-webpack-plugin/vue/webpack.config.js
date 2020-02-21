const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const WebpackDevServer = require('./config/WebpackDevServer');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 要在指定的html文件的title中加入这段: <title><%= htmlWebpackPlugin.options.title %></title
      // 否则指定的html title不会被编辑
      title: '该插件是构建一个html文件',
      template: './index.html',
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${WebpackDevServer.dev.port}/${WebpackDevServer.dev.openPage}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) { },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    })
  ],
  devServer: WebpackDevServer.dev,
};
