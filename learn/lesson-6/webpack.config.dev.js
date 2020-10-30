const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let _path = path.resolve(__dirname, 'dist')
const config = {
  entry: './src/main.js', // 文件打包入口
  output: { // 文件打包出口
    filename: 'main.js', // 打包输出文件的文件名
    path: _path
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // 如果使用了 mini-css-extract-plugin 插件，就可以不用style-loader了
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css', //类似出口文件
    }),
  ]
};

module.exports = config;