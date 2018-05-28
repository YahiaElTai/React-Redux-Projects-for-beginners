const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [ 'axios', 'prop-types', 'uuid', 'moment', 'react', 'react-dom', 'react-redux', 'redux' ];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
         {
           use: 'babel-loader',
           test: /\.js$/,
           exclude: /node_modules/
         },
        {
          loader: ExtractTextPlugin.extract({
            loader: ['css-loader', 'sass-loader']
          }),
          test: /\.scss$/
        },
        {
          loader: ExtractTextPlugin.extract({
            loader:'css-loader'
          }),
          test: /\.css$/
        }
       ]
  },
  plugins: [
  new ExtractTextPlugin('style.css'),
  new webpack.optimize.CommonsChunkPlugin({
    names: ["vendor", "manifest"],
    filenames: ["vendor.js", "manifest.js"]
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
 new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
     }),
  ]
};
