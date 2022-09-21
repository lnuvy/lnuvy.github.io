/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
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
