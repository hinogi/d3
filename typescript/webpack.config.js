var webpack = require('webpack');
var path = require('path');
var libraryName = 'd3';
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/d3.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { 
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /(typings|node_modules)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.ts']
  }
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin()
//   ]
};

module.exports = config;