const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '' : '',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig