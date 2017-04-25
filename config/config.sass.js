var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SASS_LOADER = module.exports = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'sass-loader']
  }),
  exclude: [
    path.resolve(__dirname, "node_modules"),
    path.resolve(__dirname, "dist")
   ]
}
