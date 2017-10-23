const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (env, config) {
  config.plugins.push(
    new CleanWebpackPlugin(['./vendor'])
  );
}
