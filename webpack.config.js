var path = require("path");
var webpack = require("webpack");

var HtmlwebpackPlugin = require('html-webpack-plugin');

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var staticPath = 'assets';
var port = 4001;
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './app/Main.js'
  ],
  output: {
    path: path.resolve(__dirname, staticPath),
    publicPath: "/",
    filename: 'assets/dev/js/build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'sass']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: node_modules,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"]
        }
      }, {
        test: /\.sass$/,
        loader: 'style!css!sass'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ],
    noParse: [pathToReact]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css"),    //单独使用style标签加载css并设置其路径
    new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
       favicon:'./src/img/favicon.ico', //favicon路径
       filename:'/view/index.html',    //生成的html存放路径，相对于 path
       template:'./app/index.html',    //html模板路径
       inject: 'body',    //允许插件修改哪些内容，包括head与body
       hash:true,    //为静态资源生成hash值
       minify:{    //压缩HTML文件
           removeComments:true,    //移除HTML中的注释
           collapseWhitespace:false    //删除空白符与换行符
       }
    })
  ]
};