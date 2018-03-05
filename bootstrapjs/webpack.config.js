var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [ './redy.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
          fallback: 'style-loader'
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};