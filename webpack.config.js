const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './source/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-camera.js',
  },
  resolve: {
    extensions: ['.js','.jsx', '.json'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html/, loader: 'html-loader' },
      {
        test: /\.scss$/, 
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, './source/index.html')})
  ],
};
