const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const extend = require('util')._extend;

module.exports = function (env, config) {
  let pkgConfig = {};

  if (config.uglify) {
    pkgConfig = extend(pkgConfig, config.uglify);
  }

  config.plugins.push(
    new UglifyJSPlugin(pkgConfig)
  );
}
