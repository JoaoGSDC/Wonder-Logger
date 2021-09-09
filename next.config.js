const withImages = require('next-images')

module.exports = withImages({
  pageExtensions: ['tsx'],
  poweredByHeader: false,
  esModule: true,
  future: {
    webpack5: true
  },
  images: {}
})
