const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const jquery = require('jquery');
module.exports = [ //配置加载器, 用来处理源文件, 可以把es6, jsx等转换成js, sass, less等转换成css
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
              loyd: 0.5,
              speed: 2
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