const HtmlWebpackPlugin = require('html-webpack-plugin');
const map = require('./map');

module.exports = {
    entry: `${map.src}/index.js`,
    resolve: {
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${map.src}/index.html`,
            filename: 'index.html',
        }),
    ],
};