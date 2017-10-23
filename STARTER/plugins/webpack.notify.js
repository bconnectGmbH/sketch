const WebpackNotifierPlugin = require('webpack-notifier');
const extend = require('util')._extend;

module.exports = function (env, config) {

  let pkgConfig = {
    alwaysNotify: true
  };

  if (config.notify) {
    pkgConfig = extend(pkgConfig, config.notify);
  }

  config.plugins.push(
    new WebpackNotifierPlugin(pkgConfig)
  );
}
