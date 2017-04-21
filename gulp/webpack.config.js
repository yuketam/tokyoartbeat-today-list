'use strict';

import path from 'path';
import webpack from 'webpack';
import config from './config';

const webpackConfig = {
  entry: {
    cli: `${config.path.js.src}/test.js`,
    client: `${config.path.js.src}/client.js`
  },
  output: {
    path: `${config.path.js.dist}`,
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      `${config.path.js.src}`,
      'node_modules'
    ],
    alias: {
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      comments: false,
      mangle: true
    }),
  ]
};

export default webpackConfig;
