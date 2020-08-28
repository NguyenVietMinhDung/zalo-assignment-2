/* eslint-disable import/no-extraneous-dependencies */
const merger = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merger(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    chunkFilename: '[name].[hash].chunk.js',
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]',
                },
                importLoaders: 1,
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
});
