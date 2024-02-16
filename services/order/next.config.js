const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'order',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Title': './components/Title.tsx',
        },
      }),
    );
    return config;
  }
}

module.exports = nextConfig;
