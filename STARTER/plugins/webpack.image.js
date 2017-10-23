const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (env, config) {
  let pkgConfig = {
    limit: 100000,
    publicPath: '../',
    loader: 'url-loader',
  };

  if (config.image) {
    pkgConfig = extend(pkgConfig, config.image);
  }

  config.module.rules.push({
    test: /\.(jpe?g|png|gif)$/i,
    loader: pkgConfig.loader,
    options: {
      name: "imgs/[name]-[hash].[ext]",
      limit: pkgConfig.limit,
      publicPath: pkgConfig.publicPath
    }
  }, {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader",
    options: {
      mimetype: "application/image/svg+xml",
      limit: pkgConfig.limit,
      name: "imgs/[name]-[hash].[ext]"
    }
  });
}
