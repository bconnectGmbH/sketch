const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = function(env, config) {
    config.plugins.push(
        new WebpackNotifierPlugin({alwaysNotify: true})
    );
}