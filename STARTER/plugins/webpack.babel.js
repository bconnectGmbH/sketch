module.exports = function(env, config) {
    config.module.rules.push({
        test: /\.bable$/,
        exclude: /(node_modules)/,
        use: [ 'babel-loader' ]
    });
  }