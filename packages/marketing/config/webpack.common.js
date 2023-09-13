const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      shared: packageJson.dependencies,
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
    }),
  ],
};
