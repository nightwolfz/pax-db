var webpack = require('webpack')
var pkg = require('./package.json')

module.exports = {
  output: {
    path: './dist',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
