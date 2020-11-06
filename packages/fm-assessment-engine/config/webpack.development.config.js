const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config().parsed;
const MiniCssExtractPlugin = require('../../../item-renderer/config/node_modules/mini-css-extract-plugin');
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
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 9001,
        historyApiFallback: {
            // specify this custom HTML or it will default to index.html
            index: '/assessment.html'
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
            // for federated module
            {
                test: /bootstrap\.js$/,
                loader: 'bundle-loader',
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
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv),
        }),
        new CleanWebpackPlugin(),
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
                itemRenderer: 'http://localhost:9002/remoteEntry.js',
                toolbar: 'http://localhost:9003/remoteEntry.js',
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
                ToolbarApp: 'ToolbarApp',
            },
            shared: {
                react: {
                    eager: true,
                    singleton: true,
                },
                "react-dom": {
                    eager: true,
                    singleton: true,
                },
                "@coreym/benchmark": {
                    eager: true,
                    singleton: true,
                },
                "@emotion/core": {
                    eager: true,
                    singleton: true,
                },
                "@emotion/styled": {
                    eager: true,
                    singleton: true,
                },
                "emotion-theming": {
                    eager: true,
                    singleton: true,
                },
            }
        }),
    ]
};