var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SASS_LOADER = module.exports = {
  test: /\.(sass|scss)$/,
  loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
}
