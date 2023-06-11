const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const dotenv = require('dotenv').config({ path: __dirname + './env' })

const currentDate = new Date()
const year = currentDate.getFullYear()
const month = String(currentDate.getMonth() + 1).padStart(2, '0')
const day = String(currentDate.getDate()).padStart(2, '0')
const hours = String(currentDate.getHours()).padStart(2, '0')
const minutes = String(currentDate.getMinutes()).padStart(2, '0')
const seconds = String(currentDate.getSeconds()).padStart(2, '0')

const timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`

module.exports = {
    target: 'web',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 1234,
        historyApiFallback: true,
        client: {
            overlay: true
        }
    },
    stats: 'minimal',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, './view'),
        publicPath: '/',
        filename: `[name]-${timestamp}.js`,
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            templateParameters: {
                headTags: [
                    `<link rel="icon" href="/favicon-${timestamp}.ico" />`,
                    `<link rel="manifest" href="/site-${timestamp}.webmanifest" />`,
                    `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-${timestamp}.png" />`,
                    `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-${timestamp}.png" />`,
                    `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-${timestamp}.png" />`,
                    `<meta property="og:url" content="https://kristawaltersflrealtor.com">`,
                    `<meta property="og:type" content="website">`,
                    `<meta property="og:title" content="Krista Walters | Florida Realtor">`,
                    `<meta property="og:description" content="Your trusted partner in Florida real estate">`,
                    `<meta property="og:image" content="https://kristawaltersflrealtor.com/krista-walters-headshot.jpg">`,
                    `<meta name="twitter:card" content="summary_large_image">`,
                    `<meta property="twitter:domain" content="kristawaltersflrealtor.com">`,
                    `<meta property="twitter:url" content="https://kristawaltersflrealtor.com">`,
                    `<meta name="twitter:title" content="Krista Walters | Florida Realtor">`,
                    `<meta name="twitter:description" content="Your trusted partner in Florida real estate">`,
                    `<meta name="twitter:image" content="https://kristawaltersflrealtor.com/krista-walters-headshot.jpg">`,
                    `<meta name="description" content="Your trusted partner in Florida real estate">`
                ]
            },
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed)
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/*.png',
                    to: `[name]-${timestamp}[ext]`
                },
                {
                    from: 'public/*.webmanifest',
                    to: `[name]-${timestamp}[ext]`
                },
                {
                    from: 'public/*.ico',
                    to: `[name]-${timestamp}[ext]`
                }
            ]
        })
    ]
}
