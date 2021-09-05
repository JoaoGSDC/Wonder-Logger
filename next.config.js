const withImages = require('next-images')

module.exports = withImages({
  pageExtensions: ['tsx'],
  poweredByHeader: false,
  esModule: true,
  webpack5: false,
  images: {}
})
