// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
//
// module.exports = nextConfig

const debug = process.env.NODE_ENV !== 'production'
const name = 'lnuvy.github.io'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}