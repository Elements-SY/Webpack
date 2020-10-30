const path = require('path');
module.exports = {
  devtool: 'none', // https://www.webpackjs.com/configuration/devtool/
  entry: { //入口文件
    loaderSource: path.resolve(__dirname, 'src/main.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/[name].js', //根据入口文件分为不同出口文件
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
        ],
      }
    ]
  },
};