const merge = require('webpack-merge')
const path = require('path')
const config = require('../config')
const baseConfig = require('./webpack.config')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const prodConfig = merge(baseConfig, {
  mode: 'production',
  entry: {
    'main': './src/lib/index.js'
  },
  output: {
    path: config.assetsRoot,
    filename:'image-lazyload.js',
  },
  plugins:[
    new OptimizeCSSPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
})
module.exports = prodConfig
