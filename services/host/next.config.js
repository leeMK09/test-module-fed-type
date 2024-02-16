const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          order: 'order@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        exposes: {},
        shared: {},
      }),
    );
    return config;
  }
}

module.exports = nextConfig;
