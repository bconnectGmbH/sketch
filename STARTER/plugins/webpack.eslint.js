const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function(env, config) {
    config.module.rules.push({
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: "eslint-loader",
        }
    );
}