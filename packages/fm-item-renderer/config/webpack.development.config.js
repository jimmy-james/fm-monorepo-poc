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
        // This is also needed for module federation. Allowing this module to be seen by other apps.
        publicPath: 'http://localhost:9002/',
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 9002,
        historyApiFallback: {
            // specify this HTML or it defaults to index.html
            index: '/item-renderer.html'
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
            title: 'Item Renderer',
            filename: 'item-renderer.html',
            template: 'public/index.ejs',
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
                './Renderer': './src/App'
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
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        })
    ]
};