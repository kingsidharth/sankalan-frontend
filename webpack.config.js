var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
// var CleanWebpackPlugin = require('clean-webpack-plugin');

var CONFIG_PATH = './config/config.';
var JAVASCRIPT_STACK_LOADER = require('./config/config.javascript.js');
var SASS_LOADER             = require('./config/config.sass.js');
var CSS_LOADER              = require('./config/config.css.js');


module.exports = {
  entry: [ './index.js', './app/scss/main.scss'],
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
      CSS_LOADER,
      SASS_LOADER
    ]
  },

  plugins: [
    // SASS => CSS
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/[name].css',
      allChunks: true,
    }),

    // Command Line Dashboard for Webpack
    new DashboardPlugin()
  ],


  stats: {
       colors: true
  },
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules')
  // },
  devtool: 'source-map'
};
