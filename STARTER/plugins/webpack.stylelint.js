const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (env, config) {
  config.plugins.push(
    new StyleLintPlugin()
  );
}
