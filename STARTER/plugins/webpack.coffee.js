const extend = require('util')._extend;

module.exports = function (env, config) {
  let pkgConfig = {
    test: /\.coffee$/,
    exclude: /(node_modules)/,
    use: ['coffee-loader']
  };

  if (config.coffee) {
    pkgConfig = extend(pkgConfig, config.coffee);
  }

  config.module.rules.push(pkgConfig);

}
