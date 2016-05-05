var path = require("path");
var webpack = require("webpack");

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var staticPath = 'assets';
var port = 3001;
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'static/src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, staticPath),
    publicPath: "/assets/dev/js/",
    filename: '/dev/js/build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'sass'],
    alias: {
      'react': pathToReact //每当 "react" 在代码中被引入，它会使用压缩后的 React JS 文件，而不是到 node_modules 中找。
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
      }, {
        test: /\.js$/,
        // 这里再也不需通过任何第三方来加载
        exclude: node_modules,
        loader: 'babel'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ],
    noParse: [pathToReact] //每当 Webpack 尝试去解析那个压缩后的文件，我们阻止它，因为这不必要。
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};