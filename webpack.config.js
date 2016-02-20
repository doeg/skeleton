module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: 'dist',

    // Must compile to UMD or CommonJS so it can be required in a Node context
    // @see https://github.com/markdalgleish/static-site-generator-webpack-plugin#webpackconfigjs
    libraryTarget: 'umd'
  },
};