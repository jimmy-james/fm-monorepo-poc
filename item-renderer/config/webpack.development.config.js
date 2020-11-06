const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        // with react-router's nested routes, tells html where to find the bundle in dist.
        // This is also needed for module federation. Allowing this module to be seen by other apps.
        publicPath: 'http://localhost:9004/',
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 9004,
        historyApiFallback: {
            // specify this HTML or it defaults to index.html
            index: '/renderer.html'
        },
    },
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
            {
                test: /bootstrap\.js$/,
                loader: "bundle-loader",
                options: {
                    lazy: true,
                },
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
            title: 'Renderer',
            filename: 'renderer.html',
            template: 'public/index.ejs',
            meta: {
                description: 'Renderer',
            },
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        })
    ]
};