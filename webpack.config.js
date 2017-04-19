var path = require('path');
var webpack = require('webpack');

var JAVASCRIPT_STACK_LOADER = require('./config/config.javascript.js');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
     inline: true,
     port: 8080
  },
  module: {
    loaders: [
      JAVASCRIPT_STACK_LOADER
    ]
  },
  stats: {
       colors: true
  },
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules')
  // },
  devtool: 'source-map'
};
