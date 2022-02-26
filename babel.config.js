module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          api: './src/api',
          features: './src/features',
          navigation: './src/navigation',
          'redux-configuration': './src/redux-configuration',
          'shared-components': './src/shared-components',
        },
      },
    ],
  ],
};
