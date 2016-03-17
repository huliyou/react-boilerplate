const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const reactPath = path.resolve(NODE_MODULES, 'react/dist/react.min.js');
const reactLibPath = path.resolve(NODE_MODULES, 'react/lib');
const reactRouterPath = path.resolve(NODE_MODULES, 'react-router/umd/ReactRouter.min.js');

const config = {
  entry: [
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,

        // loader: 'react-hot!babel'
        loader: 'react-hot!babel',
      },
      // {
      //  test: /\.css$/,
      //
      //  // loader: 'style!css!autoprefixer?browsers=last 2 versions'
      //  loader: 'style!css',
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=100000000',
      },
    ],
    noParse: [reactPath],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react/lib': reactLibPath,
      react: reactPath,
      'react-router': reactRouterPath,
    },

  },
  output: {
    path: './dist/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('dist/stylesheets/[name].css', {
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),
  ],
};

module.exports = config;

