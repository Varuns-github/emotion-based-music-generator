module.exports = function override(config, env) {
    const webpack = require('webpack');
    config.resolve.fallback = { "fs": false, "path": false, "buffer": false, "crypto": false, "url": require.resolve("url/"), "process": require.resolve("process/") }
    config.plugins.push(new webpack.ProvidePlugin({ process: 'process/browser', Buffer: ['buffer', 'Buffer'] }))
    return config;
  }