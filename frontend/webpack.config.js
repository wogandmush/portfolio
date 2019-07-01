const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
    publicPath: '/',
  },
  mode: 'development',
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

      },
      {
        test: /^_.*\.s?[ac]ss$/,
        loader: ['style-loader',
          {
            loader:'css-loader',
            options: {
              modules: true,
            }
          },
          {
            loader: 'sass-loader',
            options: { },
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        exclude: /^_.*$/,
        loader: [
          'style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            options: {

            },
          }
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}
