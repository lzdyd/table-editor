"use strict";

/*
TODO: ExtractTextPlugin for CSS files
TODO: avoid parsing some dirs
 */

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + "\\frontend",

  entry: {
    main: './main'
  },

  output: {
    path: __dirname + '/public/assets/js',
    publicPath: '/',
    filename: '[name].js',
    library: '[name]'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  module: {

    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: ["env"]
      }
    }, {
      test: /\.hbs/,
      loader: "handlebars-template-loader"
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]

  },

  node: {
    fs: "empty" // avoids error messages
  },

  devServer: {
    hot: true
  }

};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}