const extend = require('util')._extend;

module.exports = function (env, config) {
  let pkgConfig = {
    test: /\.bable$/,
    exclude: /(node_modules)/,
    use: ['babel-loader']
  };

  if (config.babel) {
    pkgConfig = extend(pkgConfig, config.babel);
  }

  config.module.rules.push(pkgConfig);
}
