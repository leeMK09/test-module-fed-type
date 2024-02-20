const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const federationConfig = {
  name: 'host',
  filename: 'static/chunks/remoteEntry.js',
  remotes: {
    order: 'order@http://localhost:3001/_next/static/chunks/remoteEntry.js',
  },
  exposes: {},
  shared: {},
}

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin(federationConfig),
      // new FederatedTypesPlugin(federationConfig)
    );
    return config;
  }
}

module.exports = nextConfig;
