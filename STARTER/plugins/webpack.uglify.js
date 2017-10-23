const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env, config) {
  config.plugins.push(
    new UglifyJSPlugin()
  );
}
