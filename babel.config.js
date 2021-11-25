module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          // '@components': './src/components',
          // '@helper': './src/helper',
          // '@instances': './src/instances',
          // '@interfaces': './src/interfaces',
          // '@navigation': './src/navigation',
          // '@redux': './src/redux',
          // '@screens': './src/screens',
          // '@services': './src/services',
        },
      },
    ],
  ],
};