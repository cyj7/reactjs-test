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
      'react': pathToReact
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      }, {
        test: /\.js$/,
        exclude: node_modules,
        loader: 'babel'
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
    new webpack.HotModuleReplacementPlugin()
  ]
};