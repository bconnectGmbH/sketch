const webpack = require('webpack');

module.exports = function (env, config) {
  config.plugins.push(
    new webpack.ProvidePlugin({})
  );
}
