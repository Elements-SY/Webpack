// 参考链接： https://blog.csdn.net/qq_41635167/article/details/90319183

// https://www.w3cplus.com/css3/autoprefixer-css-vender-prefixes.html
const postcssPlugins = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    }),
    require('postcss-aspect-ratio-mini')(),
    require('postcss-write-svg')({ utf8: false }),
    // https://github.com/michael-ciniawsky/postcss-load-config
    require('postcss-px-to-viewport')({
      viewportWidth: 750,  //视窗的宽度
      viewportHeight: 1334,  //视窗的高度
      unitPrecision: 2, //将px转化为视窗单位值的小数位数
      viewportUnit: 'vw', //指定要转换成的视窗单位值
      selectorBlackList: ['.ignore', '.hairlines'],  //指定不转换视窗单位值得类，可以自定义，可以无限添加
      minPixelValue: 1,  //小于等于1px不转换为视窗单位
      mediaQuery: false  //允许在媒体查询中使用px
    }),
  ]
}
module.exports = postcssPlugins;