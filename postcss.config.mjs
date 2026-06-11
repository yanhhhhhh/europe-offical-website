const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'],
      unitPrecision: 5,
      selectorBlackList: ['-nopx'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
};

export default config;
