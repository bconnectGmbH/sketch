const pkgConfig = require('./package.json').config;
const path = require('path');
const colors = require('colors');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');

module.exports = function (env) {
  env.config = pkgConfig;
  const config = {
    plugins: [],
    externals: {},
  };

  pkgConfig.plugins.forEach((plugin) => {
    console.info(`Loading: ./plugins/webpack.${plugin}.js`.yellow);
    require(`./plugins/webpack.${plugin}.js`)(env, config);
  });

  if (!fs.existsSync(`${__dirname  }/vendor`))) {
    fs.mkdirSync(`${__dirname  }/vendor`);
  }


  config.plugins.push(
    new webpack.WatchIgnorePlugin([`${__dirname  }/vendor`]),
    new CleanWebpackPlugin(['components/vendor'], { watch: true }),
    new CopyWebpackPlugin([
      { from: `${__dirname  }/vendor`, to: `${__dirname  }/components/vendor`, toType: 'dir' },
    ], { copyUnmodified: true }),
  );

  console.info('Ready loading plugins.'.green);
  return config;
};
