const map = require('./map');

module.exports = {
  output: {
    path: map.build,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  stats: 'errors-warnings',
  devtool: false,
};
