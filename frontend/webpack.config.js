

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
          [
            '@babel/preset-env',
            {
              'targets': {
                'node': '12'
              }
            }
          ],
          '@babel/preset-react',
          ]
        }

      }
    ]
  }
}
