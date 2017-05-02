var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

var CONFIG_PATH = './config/config.';
var JAVASCRIPT_STACK_LOADER = require('./config/config.javascript.js');
// var SASS_LOADER             = require('./config/config.sass.js');
// var CSS_LOADER              = require('./config/config.css.js');


module.exports = {
  entry: [ './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  devServer: {
     inline: true,
     port: 8080
  },

  module: {
    rules: [
      JAVASCRIPT_STACK_LOADER,
      // CSS_LOADER,
      // SASS_LOADER
    ]
  },

  plugins: [
    // Command Line Dashboard for Webpack
    new DashboardPlugin()
  ],


  stats: {
       colors: true
  },

  devtool: 'source-map'
};
