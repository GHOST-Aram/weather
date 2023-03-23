const path = require('path')

module.exports  = {
    mode: 'development',
    entry: {
        bundle: '/src/scripts/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist')
        },
        port: '3000',
        hot: true,
        historyApiFallback: true,
        open: true,
        compress: true,
    }
}