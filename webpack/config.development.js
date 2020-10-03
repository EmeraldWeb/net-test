const Webpack = require('webpack');
const map = require('./map');

module.exports = {
    output: {
        path: map.build,
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: map.build,
        stats: 'errors-only',
        compress: true,
        hot: true,
        historyApiFallback: true,
        port: 9000,
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()],
};
