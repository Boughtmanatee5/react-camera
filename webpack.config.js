const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './source/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-camera.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html/, loader: 'html-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, './source/index.html')})
  ]
};
