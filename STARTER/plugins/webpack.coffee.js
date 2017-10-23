module.exports = function (env, config) {
  config.module.rules.push({
    test: /\.coffee$/,
    use: ['coffee-loader']
  });
}
