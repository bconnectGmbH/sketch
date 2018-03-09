const pkgConfig = require('./package.json').config;
const path = require('path');
const colors = require('colors');

module.exports = function (env) {
  env.config = pkgConfig;
  let config = {
    plugins: [],
    externals: {}
  };

  pkgConfig.plugins.forEach((plugin) => {
    console.info(`Loading: ./plugins/webpack.${plugin}.js`.yellow);
    require(`./plugins/webpack.${plugin}.js`)(env, config);
  })
  console.info('Ready loading plugins.'.green);
  return config;
}
