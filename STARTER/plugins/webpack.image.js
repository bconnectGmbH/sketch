const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (env, config) {
  config.module.rules.push({
    test: /\.(jpe?g|png|gif)$/i,
    loader: "file-loader",
    options: {
      name: "imgs/[name]-[hash].[ext]",
      limit: 100000,
      publicPath: '../'
    }
  }, {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader",
    options: {
      mimetype: "application/image/svg+xml",
      limit: 100000,
      name: "imgs/[name]-[hash].[ext]"
    }
  });
}
