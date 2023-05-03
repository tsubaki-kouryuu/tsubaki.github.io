const isCustomDomainless = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isCustomDomainless ? '' : '',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig