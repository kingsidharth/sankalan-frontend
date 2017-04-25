var path = require('path');

var JAVASCRIPT_STACK_LOADER = module.exports =  {
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: [
      ['transform-runtime', {
        helpers: false,
        polyfill: false,
        regenerator: true, }]
    ]
  },
  exclude:  path.resolve(__dirname, "node_modules")
}
