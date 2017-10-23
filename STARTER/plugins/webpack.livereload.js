const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = function (env, config) {
  config.plugins.push(
    new LiveReloadPlugin(env.config.livereload)
  );

  config.module.rules.push({
    test: /\index.js$/,
    loader: 'webpack-append',
    query: "const script = document.createElement('script');" +
      "script.src = `http://${window.location.hostname}:35729/livereload.js?snipver=1`;" +
      "document.head.appendChild(script);"
  });
}
