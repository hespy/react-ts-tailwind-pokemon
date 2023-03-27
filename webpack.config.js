const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
      exclude: [/\.map$/, /asset-manifest\.json$/],
    }),
  ],
};
