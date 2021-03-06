var webpack = require('webpack');
var path = require('path');
var libraryName = 'd3';
var outputFile = libraryName + '.js';
var childProcess = require('child_process').execSync;

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
    new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(childProcess('git rev-list HEAD --count').toString().replace(/\n/gi,""))
    })
  ]
};

module.exports = config;