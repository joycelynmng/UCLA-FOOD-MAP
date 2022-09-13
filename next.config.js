const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,

  webpack: config => {
    // Optional: Enables reading mapbox token from environment variable
    config.plugins.push(new webpack.EnvironmentPlugin({MapboxAccessToken: 'pk.eyJ1Ijoiam95Y2VseW5ubmciLCJhIjoiY2w3eTNzbXpoMHZqeDN2cXNqazRpZTlxaCJ9.FXzKgEA4xQSQUkbiV89Bug'}));
    return config;
  }
};
