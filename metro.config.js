// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    // Use the SVG transformer (it delegates to RN's default transformer for non-SVG files)
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native'
    )
  },
  resolver: {
    // Treat .svg as source, not asset
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    // Add svg and keep your cjs support
    sourceExts: [...sourceExts, 'svg', 'cjs']
  }
});
