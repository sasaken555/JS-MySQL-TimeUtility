module.exports = {
  entry: './src/mysqlTimeUtil.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-espower']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};