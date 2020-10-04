const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/config.common');

module.exports = (env, argv) => {
  const enviromentConfig = require(`./webpack/config.${argv.mode}`); // eslint-disable-line

  return merge(commonConfig, enviromentConfig);
};
