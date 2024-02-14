import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "order",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./component": "./components/OrderComponent.tsx",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};

export default nextConfig;
