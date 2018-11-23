const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const ExtractTextPlugin = require("extract-text-webpack-plugin")

let isDev = process.env.NODE_ENV==='development'?true:false
module.exports = {
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [isDev? "style-loader" : MiniCssExtractPlugin.loader,'css-loader',  'postcss-loader', 'sass-loader']
//      use: isDev?['css-loader', "style-loader", 'postcss-loader'] :ExtractTextPlugin.extract({
//        fallback: "style-loader",
//          use: ['css-loader', 'postcss-loader']
//        })
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '../src'),
      'examples': path.resolve(__dirname, '../src/examples'),
      'css': path.resolve(__dirname, '../src/css'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'lib': path.resolve(__dirname, '../src/lib'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
//   new ExtractTextPlugin("styles.css")
  ]
}