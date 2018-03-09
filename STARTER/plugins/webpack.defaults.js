const pkgConfig = require('../package.json').config;
const path = require('path');
const ProvidePlugin = require('webpack').ProvidePlugin;

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

  config.entry = [
    path.resolve(__dirname, '../js/index.js'),
  ];

  config.output = {
    path: path.resolve(__dirname, '../vendor'),
    filename: 'js/scripts.js',
  };
  config.plugins.push(
    new ProvidePlugin({
      $: "jQuery",
    })
  );

  config.externals['$'] = 'jQuery';

  config.watchOptions = {
    poll: true
  }

  if ((env.NODE_ENV === 'dev')) {
    config.devtool = 'inline-source-map';
  }

  return config;
}
