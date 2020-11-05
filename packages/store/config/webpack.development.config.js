const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config().parsed;
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        // with react-router's nested routes, tells html where to find the bundle in dist.
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [{
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
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv),
        }),
        new CleanWebpackPlugin(),
    ]
};