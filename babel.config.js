module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@models': './src/models',
            '@utils': './src/utils',
            '@store': './src/store',
            '@navigation': './src/navigation',
            '@hooks': './src/hooks',
            '@i18n': './src/locales/index',
            '@i18n/*': './src/locales',
            '@constants': './src/constants',
            '@config': './src/config',
            '@storage': './src/storage',
            '@assets': './src/assets'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        }
      ],
      '@babel/plugin-transform-export-namespace-from',
      'react-native-reanimated/plugin' // must be last
    ]
  };
};
