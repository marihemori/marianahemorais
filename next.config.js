/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  dir: 'out',

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const { withContentlayer } = require('next-contentlayer')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const plugins = [withContentlayer, withBundleAnalyzer]

module.exports = () => {
  return plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      domains: ['picsum.photos'],
    },
    experimental: {
      appDir: true,
    },
  })
}
