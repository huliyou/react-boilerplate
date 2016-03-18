var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var webpack = require('webpack');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require('./webpack.config.dev');
var compiler = webpack(webpackConfig);

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'dist');

app.use(express.static(publicPath));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));


if (!isProduction) {

  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/dist/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8000'
    });
  });

}
//
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});