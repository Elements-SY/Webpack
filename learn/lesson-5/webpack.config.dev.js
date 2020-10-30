const path = require('path');
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
          'css-loader',
          // 如果只是使用，不给予该loader配置，可以直接以字符串的方式写入。
          // 倘若需要配置该loader配置链接入口如下:
          // link: https://www.webpackjs.com/concepts/loaders/#%E9%85%8D%E7%BD%AE-configuration-
        ],
      }
    ]
  },
};

module.exports = config;