const extend = require('util')._extend;
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (env, config) {
  let pkgConfig = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: ['es-loader']
  };

  if (config.eslint) {
    pkgConfig = extend(pkgConfig, config.eslint);
  }
  config.module.rules.push(pkgConfig);
}
