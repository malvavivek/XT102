module.exports = {
    entry: './localstorage.js',
   output: {
      publicPath: '/',
      filename: 'mainlocalstorage.js'
  },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
			options: {
    presets: [
      'es2015',
      'stage-1'
    ]
  }
        }]
    }
};