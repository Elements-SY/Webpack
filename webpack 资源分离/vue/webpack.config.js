const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// console.log(path.resolve(__dirname))
module.exports = {
  mode: 'development',
  entry: { //入口文件
    jquery: path.resolve(__dirname, path.resolve(__dirname, 'src/static/js/jquery.js')),
    index: path.resolve(__dirname, path.resolve(__dirname, 'src/static/js/index.js')),
    login: path.resolve(__dirname, path.resolve(__dirname, 'src/static/js/login.js')),
    register: path.resolve(__dirname, path.resolve(__dirname, 'src/static/js/register.js')),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/[name].js', //根据入口文件分为不同出口文件
  },
  devtool: 'inline-source-map', // 不同选项适用于不同环境
  devServer: {
    contentBase: './dist', //将dist目录下的文件(index.html)作为可访问文件, 如果不写这个参数则默认与webpack.cofig.js的同级目录
    port: 8080 //端口号设为8080, 默认也是8080
  },
  plugins: [ //webpack 通过 plugins 实现各种功能, 比如 html-webpack-plugin 使用模版生成 html 文件
    // new CleanWebpackPlugin(['dist']), //设置清除的目录

    // // 注入对象
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery',
    // }),
    new HtmlWebpackPlugin({
      title: '首页',
      template: path.resolve(__dirname, path.resolve(__dirname, 'src/pages/index.html')), //设置生成的HTML文件的名称, 支持指定子目录，如：assets/admin.html
      chunks: ['index', 'common', 'jquery'], //指定入口文件
      filename: "index.html", //指定模板文件的位置
      minify: { // 压缩
        removeAttributeQuotes: false, // 去掉属性的双引号
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //折叠空白区域 也就是压缩代码
        removeAttributeQuotes: false, //去除属性引用
      },
    }),
    new HtmlWebpackPlugin({
      title: '登录',
      template: path.resolve(__dirname, path.resolve(__dirname, 'src/pages/login.html')),
      chunks: ['login', 'common', 'jquery'],
      filename: "login.html",
      minify: { // 压缩
        removeAttributeQuotes: false, // 去掉属性的双引号
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //折叠空白区域 也就是压缩代码
        removeAttributeQuotes: false, //去除属性引用
      },
    }),
    new HtmlWebpackPlugin({
      title: '注册',
      template: path.resolve(__dirname, path.resolve(__dirname, 'src/pages/register.html')),
      chunks: ['register', 'common', 'jquery'],
      filename: "register.html",
      minify: { // 压缩
        removeAttributeQuotes: false, // 去掉属性的双引号
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //折叠空白区域 也就是压缩代码
        removeAttributeQuotes: false, //去除属性引用
      },
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css', //类似出口文件
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, //一个正则表达式，指示应优化\最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
      cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano。这应该是一个跟随cssnano.process接口的函数（接收CSS和选项参数并返回一个Promise）。
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
      canPrint: true //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/font'),
        to: path.resolve(__dirname, 'dist/assets/font'),
        ignore: ['.*']
      }
    ]),
  ],
  module: {
    rules: [ //配置加载器, 用来处理源文件, 可以把es6, jsx等转换成js, sass, less等转换成css
      {
        exclude: /node_modules|packages/, //路径
        test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
        use: 'babel-loader', //使用的加载器名称
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // 如果使用了 mini-css-extract-plugin 插件，就可以不用style-loader了
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(htm|html)$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true, //是否压缩HTML文件
              removeComments: false, //是否移除HTML中的注释
              collapseWhitespace: false, //是否删除空白符与换行符
              attrs: ['img:src', 'link:href']
            }
          },
          // {
          //   loader: 'html-withimg-loader'
          // }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "[name]-[hash:8].[ext]",
              limit: 20000, // size <= 20KB
              publicPath: './assets/image/',
              outputPath: "assets/image/"
            }
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-pngquant")({
                  quality: "80", // the quality of zip
                  dithering: 1
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        // use: "file-loader",
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: '',
            publicPath: './assets/font/iconfont/', //公共路径
            outputPath: "assets/fonts",
            emitFile: false, //
            esModule: false
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            }
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        //打包公共模块
        common: {
          chunks: 'initial', //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少的文件数,也就是必须有两个文件都引入了同一个文件才会提取公共的js或者css
          minSize: 0, //表示提取公共部分最小的大小
          name: 'common' //提取出来的文件命名
        },
        // jquery: {
        //   chunks: 'initial', //initial表示提取入口文件的公共部分
        //   minChunks: 2, //表示提取公共部分最少的文件数,也就是必须有两个文件都引入了同一个文件才会提取公共的js或者css
        //   minSize: 0, //表示提取公共部分最小的大小
        //   name: 'jQuery' //提取出来的文件命名
        // }
      }
    }
  },
  devServer: {
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
  }
};