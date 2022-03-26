const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/template.dev.html'
    }),
  ]
})
