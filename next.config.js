/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // output: "export",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
