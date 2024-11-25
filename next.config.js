/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/jjasminechii.github.io',
  assetPrefix: './', 
};

module.exports = nextConfig;
