const webpack = require('webpack');

module.exports = function (env, config) {
  config.plugins.push(
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    })
  );

  config.module.rules.push({
    test: /\index.js$/,
    loader: 'webpack-append',
    query: "import 'bootstrap/js/dist/alert';\n" +
      "import 'bootstrap/js/dist/button';\n" +
      "import 'bootstrap/js/dist/carousel'\n;" +
      "import 'bootstrap/js/dist/collapse'\n;" +
      "import 'bootstrap/js/dist/dropdown'\n;" +
      "import 'bootstrap/js/dist/modal';\n" +
      "import 'bootstrap/js/dist/popover';\n" +
      "import 'bootstrap/js/dist/scrollspy';\n" +
      "import 'bootstrap/js/dist/tab';\n" +
      "import 'bootstrap/js/dist/tooltip';\n" +
      "import 'bootstrap/js/dist/util';\n"
  });
}
