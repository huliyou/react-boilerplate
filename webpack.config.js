var webpack = require('webpack');
var path = require('path');

var NODE_MODULES = path.resolve(__dirname, 'node_modules');
var reactPath = path.resolve(NODE_MODULES, 'react/dist/react.min.js');
var reactLibPath = path.resolve(NODE_MODULES, 'react/lib');
var amazeuiTouchPath = path.resolve(NODE_MODULES, 'amazeui-touch/dist/amazeui.touch.min.js');
var reactRouterPath = path.resolve(NODE_MODULES, 'react-router/umd/ReactRouter.min.js');

var config = {
  entry: [

      //'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.js',
  ],
  module: {
    loaders: [
            {
              test: /\.jsx?$|\.js?$/,
              exclude: /node_modules/,

              //loader: 'react-hot!babel'
              loader: 'react-hot!babel',
            },
            {
              test: /\.css$/,

              //loader: 'style!css!autoprefixer?browsers=last 2 versions'
              loader: 'style!css',
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=100000000',
            },
        ],
    noParse:[reactPath],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react/lib': reactLibPath,
      react: reactPath,
      'amazeui-touch': amazeuiTouchPath,
      'react-router': reactRouterPath,
    },

  },
  output: {
    path: './',
    filename: './bundle.js',

    //publicPath: path.resolve('asset')
  },
  devServer: {
    contentBase: './',
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [

      //new webpack.optimize.DedupePlugin(),
      //new webpack.optimize.OccurenceOrderPlugin(),
      //new webpack.NoErrorsPlugin(),
      //new webpack.optimize.UglifyJsPlugin({
      //    compress: {
      //        warnings: false,
      //    },
      //    sourceMap: false
      //}),
      new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
