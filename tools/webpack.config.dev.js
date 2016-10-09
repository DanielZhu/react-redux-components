const path = require('path');
const webpack = require('webpack');
const postcssNested = require('postcss-nested');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel'],
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
        // loader: ['style?sourceMap',
        // 'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]'],
      },
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: '/node_modules/' },
    ],
  },
  postcss: () => [
    postcssNested,
  ],
};
