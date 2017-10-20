const pkgConfig = require('./package.json').config;
const path = require('path');

module.exports = function (env) {
    let config = {
        module: {
            rules: []
        },
        entry:  [
            path.resolve(__dirname, 'js/index.js'),
        ],
        output: {
            path: path.resolve(__dirname, 'vendor'),
            filename: 'js/scripts.js',
        },
        plugins: [],
        watchOptions: {
            poll: true
        }
    }
    if ((env.NODE_ENV === 'dev')) {
       config.devtool = 'inline-source-map';
    }

    env.config = pkgConfig;

    pkgConfig.plugins.forEach((plugin) => {
        console.info(`Loading: ./plugins/webpack.${plugin}.js`);
        require(`./plugins/webpack.${plugin}.js`)(env, config);
    })
    return config;
}