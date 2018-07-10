module.exports = function fontPlugin(env, config) {
  let pkgConfig = {
    limit: 1,
    outputPath: '../vendor/fonts',
    loader: 'url-loader',
    publicPath: '../fonts',
  };

  if (config.fonts) {
    pkgConfig = $.extend(pkgConfig, config.fonts);
  }

  config.module.rules.push({
    test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: 'application/font-woff',
      limit: pkgConfig.limit,
      name: 'fonts/[name].[ext]',
      outputPath: pkgConfig.outputPath,
      publicPath: pkgConfig.publicPath,
    },
  }, {
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: 'application/font-woff',
      limit: pkgConfig.limit,
      name: 'fonts/[name].[ext]',
      outputPath: pkgConfig.outputPath,
      publicPath: pkgConfig.publicPath,
    },
  }, {
    test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: 'application/font-ttf',
      limit: pkgConfig.limit,
      name: 'fonts/[name].[ext]',
      outputPath: pkgConfig.outputPath,
      publicPath: pkgConfig.publicPath,
    },
  }, {
    test: /\.(otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: 'application/font-otf',
      limit: pkgConfig.limit,
      name: 'fonts/[name].[ext]',
      outputPath: pkgConfig.outputPath,
      publicPath: pkgConfig.publicPath,
    },
  }, {
    test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: 'application/font-eot',
      limit: pkgConfig.limit,
      name: 'fonts/[name].[ext]',
      outputPath: pkgConfig.outputPath,
      publicPath: pkgConfig.publicPath,
    },
  }, {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: 'application/image/svg+xml',
      limit: pkgConfig.limit,
      name: 'imgs/[name].[ext]',
      outputPath: pkgConfig.outputPath,
      publicPath: pkgConfig.publicPath,
    },
  });
};
