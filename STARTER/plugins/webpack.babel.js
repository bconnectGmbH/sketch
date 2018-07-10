const extend = require('util')._extend;

module.exports = function (env, config) {
  let pkgConfig = {
    test: /\.jsx$/,
    exclude: /(node_modules)/,
    use: [{
      loader: 'import-glob',
    }, {
      loader: 'babel-loader',
    }],
  };
  if (config.babel) {
    pkgConfig = extend(pkgConfig, config.babel);
  }

  config.module.rules.push(pkgConfig);
};
