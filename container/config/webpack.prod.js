const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${DOMAIN}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
  },
};

module.exports = merge(commonConfig, prodConfig);
