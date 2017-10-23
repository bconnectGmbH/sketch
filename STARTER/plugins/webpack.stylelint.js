const StyleLintPlugin = require('stylelint-webpack-plugin');
const extend = require('util')._extend;

module.exports = function (env, config) {
  let pkgConfig = {};

  if (config.stylelint) {
    pkgConfig = extend(pkgConfig, config.stylelint);
  }

  config.plugins.push(
    new StyleLintPlugin(pkgConfig)
  );
}
