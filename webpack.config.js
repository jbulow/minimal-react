module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'www/index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline: true,
    port: 8080
  },
  devtool: 'source-map'
}
