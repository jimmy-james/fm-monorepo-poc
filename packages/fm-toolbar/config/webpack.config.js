const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  ModuleFederationPlugin
} = require('webpack').container;

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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Item Renderer',
      filename: 'item-renderer.html',
      template: 'public/index.html',
      meta: {
        description: 'Item Renderer',
      },
    }),
    new ModuleFederationPlugin({
      name: 'ItemRendererApp',
      library: {
        type: "var",
        name: "ItemRendererApp"
      },
      /**
       * All other apps will reference this app through a public URL.
       * Public URL is baked into remoteEntry.js. I can build my app on local, then and copy generated files to CDN.
       * In build process, webpack doesn't know this, so we have to tell Webpack our publicPath to the correct url to CDN. 
       */
      filename: 'remoteEntry.js',
      exposes: {
        // module and path to module.
        './Renderer': './src/Renderer'
      },
      shared: ['react', 'react-dom', 'redux', '@coreym/benchmark']
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    })
  ]
};