const extend = require('util')._extend;

module.exports = function (env, config) {
  let pkgConfig = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: ['eslint-loader']
  };

  if (config.eslint) {
    pkgConfig = extend(pkgConfig, config.eslint);
  }
  config.module.rules.push(pkgConfig);
}
