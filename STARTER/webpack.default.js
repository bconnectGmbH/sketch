const path = require('path')
const webpack = require('webpack')
const url = 'shaque.docksal';

module.exports = function(env) {
  if (!env.NODE_ENV) {
    env.NODE_ENV = 'dev';
  }
  env.hostname = 'localhost';

  let plugins = [
  ];

  let rules = {
    rules: [
    ]
  }

  let config = {
    module: rules,
    entry:  [
      path.resolve(__dirname, 'js/index.js'),
    ],
    output: {
      path: path.resolve(__dirname, 'vendor'),
      filename: 'js/scripts.js',
    },
    plugins: plugins,
    watchOptions: {
      poll: true
    }
  }
  if ((env.NODE_ENV === 'dev')) {
    config.devtool = 'inline-source-map';
  }
  return config;
}