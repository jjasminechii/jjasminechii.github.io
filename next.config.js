// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  output: 'export',
  basePath: '/jjasminechii.github.io', 
  assetPrefix: './', 
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.md|\.mdx|\.webp$/,
      use: 'raw-loader',
    });

    return config;
  },
};
