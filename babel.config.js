module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react', 'babel-preset-expo'];
  const  plugins = ['@babel/plugin-transform-modules-commonjs'];
  return {
    presets,
    plugins
  };
};
