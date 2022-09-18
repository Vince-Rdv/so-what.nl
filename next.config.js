/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['so-what.stager.nl'],
  },
}

module.exports = nextConfig
