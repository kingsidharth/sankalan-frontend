var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


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
    loaders: [
      JAVASCRIPT_STACK_LOADER,
      CSS_LOADER,
      SASS_LOADER
    ]
  },
  stats: {
       colors: true
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].css',
      allChunks: true,
    }),
  ],
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules')
  // },
  devtool: 'source-map'
};
