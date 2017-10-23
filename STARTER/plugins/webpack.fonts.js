module.exports = function (env, config) {

  let pkgConfig = {
    limit: 100000,
    outputPath: '../',
    loader: 'url-loader',
  };

  if (config.fonts) {
    pkgConfig = extend(pkgConfig, config.fonts);
  }

  config.module.rules.push({
    test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: "application/font-woff",
      limit: pkgConfig.limit,
      name: 'fonts/[name]-[hash].[ext]',
      outputPath: pkgConfig.outputPath
    }
  }, {
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: "application/font-woff",
      limit: pkgConfig.limit,
      name: 'fonts/[name]-[hash].[ext]',
      outputPath: pkgConfig.outputPath
    }
  }, {
    test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: "application/font-ttf",
      limit: pkgConfig.limit,
      name: 'fonts/[name]-[hash].[ext]',
      outputPath: pkgConfig.outputPath
    }
  }, {
    test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: "application/font-eot",
      limit: pkgConfig.limit,
      name: 'fonts/[name]-[hash].[ext]',
      outputPath: pkgConfig.outputPath
    }
  }, {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: pkgConfig.loader,
    options: {
      mimetype: "application/image/svg+xml",
      limit: pkgConfig.limit,
      name: "imgs/[name]-[hash].[ext]",
      outputPath: pkgConfig.outputPath
    }
  });
}
