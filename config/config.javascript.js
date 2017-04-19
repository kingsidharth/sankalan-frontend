
var JAVASCRIPT_STACK_LOADER = module.exports =  {
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
      presets: ['es2015', 'react']
  }
}
