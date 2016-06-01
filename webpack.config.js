var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/app/app.js'),

  devtool: 'sourcemap',

  output: {
    path: path.resolve(__dirname, 'dist'),
    //publicPath need for Hot Module Reload
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file' },
      { test: /\.js$/, loader: 'babel?presets=es2015', exclude: [/node_modules/, /\.spec\.js/] }
    ]
  },
  stylus: {
  use: [require('jeet')(), require('rupture')()]
}

};
