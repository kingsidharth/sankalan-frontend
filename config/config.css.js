var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CSS_LOADER = module.exports = { // regular css files
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    loader: 'css-loader?importLoaders=1',
  }),
}
