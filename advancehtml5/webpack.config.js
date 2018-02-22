module.exports = {
    entry: './server/initiateClient.js',
   output: {
      publicPath: '/',
      filename: './server/main.js'
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