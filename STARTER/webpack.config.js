const pkgConfig = require('./package.json').config;
const path = require('path');

module.exports = function (env) {
    env.config = pkgConfig;
    let config = {};

    pkgConfig.plugins.forEach((plugin) => {
        console.info(`Loading: ./plugins/webpack.${plugin}.js`);
        require(`./plugins/webpack.${plugin}.js`)(env, config);
    })
    return config;
}