const pkgConfig = require('./package.json').config;

module.exports = function (env) {
    let conf = require('./webpack.default.js')(env);
    pkgConfig.plugins.forEach((plugin) => {
        conf = require(`./plugins/webpack.${plugin}.js`)(env, conf);
    })
    return conf;
}