module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  preset: 'jest-expo',
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-native-vector-icons|@expo/vector-icons/.*|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  setupFiles: [
    "./jest/setup.js"
  ],
};
