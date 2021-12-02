const FLAVOR = process.env.FLAVOR || 'default';
const flavorPath = `./flavors/${FLAVOR}`;

console.log('building', FLAVOR);

module.exports = api => {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./', flavorPath, './flavors/default'],
          alias: {
            '@flavor': flavorPath,
          },
        },
      ],
    ],
  };
};
