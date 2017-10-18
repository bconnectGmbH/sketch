const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = function(env, config) {
    env.test = "---- MY TEST ----";
    let cssOptions = {
        minimize: (env.NODE_ENV === 'dev') ? false : true
    }
    config.module.rules.push({
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: cssOptions
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer'),
                    require('postcss-font-grabber')({dirPath : './tmp'})
                  ];
                }
              }
            }, {
              loader: 'sass-loader',
            }, {
              loader: 'import-glob'
            }
          ]
        })
    });
    config.entry.push(path.resolve(__dirname, '../scss/styles.scss'));
    config.plugins.push(
        new ExtractTextPlugin({filename: 'css/styles.css', disable: false, allChunks: true}),
    );
}
