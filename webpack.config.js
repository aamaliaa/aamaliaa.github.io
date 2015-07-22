var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./src/data');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.styl$/, loader: 'css-loader?minimize!stylus-loader' }    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]

};
