// const withPlugins = require('next-compose-plugins');
// const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config, { webpack }) {
    return {
      ...config,
      mode: isDevelopment ? 'development' : 'production',
      devtool: !isDevelopment ? 'hidden-source-map' : 'inline-source-map',
      plugins: [...config.plugins],
    };
  },
});
