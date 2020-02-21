const path = require('path');

module.exports = {
  /*
  mode 配置选项 string
  mode: 'production' or 'development'
  link: https://www.webpackjs.com/concepts/mode/
  */
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}