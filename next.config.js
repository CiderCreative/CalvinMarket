/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "blint-calvinmarket-site-itemimgsbucket19c4dc57-kafbox1v5lux.s3.us-east-1.amazonaws.com",
      "picsum.photos",
    ],
  },
  webpack: (config) => {
    config.devtool = "source-map";

    return config;
  },
};

module.exports = nextConfig;
