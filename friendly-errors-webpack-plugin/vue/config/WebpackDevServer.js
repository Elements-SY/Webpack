module.exports = {
  dev: {
    contentBase: false,
    historyApiFallback: false,
    hot: true,
    quiet: true,
    // 出现错误时，在浏览器中显示全屏覆盖层
    overlay: {
      warnings: false, errors: true
    },
    host: 'localhost',
    port: 8080,
    open: true,
    openPage: 'index.html',
    publicPath: '/'
  },
}