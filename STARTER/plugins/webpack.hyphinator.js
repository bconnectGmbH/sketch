const pkgConfig = require('../package.json').config;
const path = require('path');

module.exports = function (env, config) {
  config.resolve.alias.hyphen_lang_de = path.resolve('node_modules', 'hypher-for-jquery/patterns/de.js');
};
