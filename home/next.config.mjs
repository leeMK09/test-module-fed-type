import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            order:
              "order@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          },
          exposes: {},
          shared: {},
        })
      );
    }

    return config;
  },
};

export default nextConfig;
