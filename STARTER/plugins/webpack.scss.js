const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const extend = require('util')._extend;
const globImporter = require('node-sass-glob-importer');
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');

module.exports = function (env, config) {
  let cssOptions = {
    minimize: (env.NODE_ENV === 'dev') ? false : true,
    importLoaders: false
  }
  config.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: cssOptions
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer'),
              require('postcss-font-grabber')({
                dirPath: './tmp'
              })
            ];
          }
        }
      }, {
        loader: 'sass-loader',
        options: {
          importer: globImporter(),
          importLoaders: false
        }
      }]
    })
  });
  config.entry.styles = path.resolve(__dirname, '../scss/styles.scss');
  config.plugins.push(
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      disable: false,
      allChunks: true
    }),
    new ExtraneousFileCleanupPlugin({
      extensions: ['.js']
    })
  );
}
