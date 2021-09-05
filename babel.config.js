module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic'
      }
    ],
    ['styled-components', { ssr: true, preprocess: false }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@types': './src/@types',
          '@services': './src/services',
          '@styles': './src/styles',
          '@hooks': './src/hooks',
          '@libs': './src/libs',
          '@data': './src/data',
          '@layouts': './src/layouts',
          '@contexts': './src/contexts',
          '@config': './src/config'
        }
      }
    ],
    'inline-react-svg'
  ]
}
