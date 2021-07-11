const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
require('babel-plugin-syntax-async-functions')

module.exports = merge(common,
  {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      watchContentBase: true,
      progress: true,
      hot: true,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            'postcss-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)
