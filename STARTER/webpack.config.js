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

  if (!fs.existsSync(`${__dirname  }/components/vendor`)) {
    fs.mkdirSync(`${__dirname  }/components/vendor`);
  }


  config.plugins.push(
    new webpack.WatchIgnorePlugin([`${__dirname  }/components/vendor`])
  );

  console.info('Ready loading plugins.'.green);
  return config;
};
