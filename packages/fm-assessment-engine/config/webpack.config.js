const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config().parsed;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  ModuleFederationPlugin
} = require('webpack').container;
// assign env in advance
// dotenv.NODE_ENV = 'development';

module.exports = {
  entry: './src/index',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    // with react-router's nested routes, tells html where to find the bundle in dist.
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  mode: 'production',
  module: {
    rules: [{
        test: /\.(scss|css)$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'mf-monorepo-poc',
      filename: 'assessment.html',
      template: 'public/index.ejs',
      meta: {
        description: 'mf-monorepo-poc v. 1',
      },
      // injects parameters into the index.ejs template file
      templateParameters: {
        itemRenderer: 'CDN URL',
      }
    }),
    new ModuleFederationPlugin({
      name: 'AssessmentApp',
      // app will not recognize remote module without this:
      library: {
        type: 'var',
        name: 'AssessmentApp'
      },
      /**
       * All other apps will reference this app through a public URL.
       * Public URL is baked into remoteEntry.js. I can build my app on local, then and copy generated files to CDN.
       * In build process, webpack doesn't know this, so we have to tell Webpack our publicPath to the correct url to CDN. 
       */
      // filename: 'remoteEntry.js',
      remotes: {
        // module: path to module.
        ItemRendererApp: 'ItemRendererApp',
      },
      shared: ['react', 'react-dom']
    }),
  ]
};