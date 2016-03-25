const webpack = require('webpack');
const path = require('path');
const libraryName = 'd3';
const outputFile = libraryName + '.js';
const childProcess = require('child_process').spawnSync;

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
  },
  
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
    new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(childProcess('git rev-list HEAD --count').toString())
    })
  ]
};

module.exports = config;