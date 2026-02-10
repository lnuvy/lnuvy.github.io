/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://lnuvy.github.io' : '',

  env: {
    NEXT_PUBLIC_MX_TOKEN: process.env.NEXT_PUBLIC_MX_TOKEN,
  },
}

module.exports = nextConfig
