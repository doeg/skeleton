module.exports = {
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: 'dist',

    // Must compile to UMD or CommonJS so it can be required in a Node context
    // @see https://github.com/markdalgleish/static-site-generator-webpack-plugin#webpackconfigjs
    libraryTarget: 'umd'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};