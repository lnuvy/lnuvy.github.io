/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://lnuvy.github.io' : '',
}

module.exports = nextConfig

//
// const path = require('path');
// const { webpack } = require('next')
//
// const nextConfig = phase => {
//   webpack(config, { webpack }) {
//     config.resolve = {
//       alias: {
//         '@constant': path.resolve(__dirname, 'src/constant'),
//         '@utils': path.resolve(__dirname, 'src/utils'),
//         '@hooks': path.resolve(__dirname, 'src/hooks'),
//         '@components': path.resolve(__dirname, 'src/components')
//       },
//       ...config.resolve
//     };
//     return config;
//   }
// }
//
// module.exports = phase => nextConfig(phase);
