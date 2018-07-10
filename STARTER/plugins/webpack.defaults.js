const pkgConfig = require('../package.json').config;
const path = require('path');
const ProvidePlugin = require('webpack').ProvidePlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function (env, config) {
  config.context = path.resolve(__dirname, "../js");
  config.module = {
    rules: []
  };

  config.resolve = {
    alias: {
      scripts: path.resolve(__dirname, '../js/scripts'),
      scss: path.resolve(__dirname, '../scss')
    }
  };


  config.entry = {
    scripts: path.resolve(__dirname, '../js/index.jsx'),
    pollyfill:  path.resolve(__dirname, '../js/pollyfill.jsx'),
  }

  config.output = {
    path: path.resolve(__dirname, '../vendor'),
    filename: 'js/[name].js',
  };
  config.plugins.push(
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'scripts'
    })
  );

  config.externals['$'] = 'jQuery';
  config.externals['jquery'] = 'jQuery';

  config.watchOptions = {
    poll: true
  }

  if ((env.NODE_ENV === 'dev')) {
    config.devtool = 'inline-source-map';
  }

  return config;
}
