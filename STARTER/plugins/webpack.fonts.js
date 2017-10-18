
module.exports = function(env, config) {

      config.module.rules.push({
          test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
          options: {
            mimetype: "application/font-woff",
            limit: 100000,
            name: 'fonts/[name]-[hash].[ext]',
            outputPath: '../'
          }
        }, {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
          options: {
            mimetype: "application/font-woff",
            limit: 100000,
            name: 'fonts/[name]-[hash].[ext]',
            outputPath: '../'
          }
        }, {
          test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
          options: {
            mimetype: "application/font-ttf",
            limit: 100000,
            name: 'fonts/[name]-[hash].[ext]',
            outputPath: '../'
          }
        }, {
          test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
          options: {
            mimetype: "application/font-eot",
            limit: 100000,
            name: 'fonts/[name]-[hash].[ext]',
            outputPath: '../'
          }
        }, {
          test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
          options: {
            mimetype: "application/image/svg+xml",
            limit: 100000,
            name: "imgs/[name]-[hash].[ext]",
            outputPath: '../'
          }
        }
      );
  }
