const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')

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
    },
    plugins: [
        new HtmlWebPackPlugin ({
            title: 'Weather',
            filename: 'index.html',
            template: './src/templates/index.html'
        })
    ],
    module: {
        rules: [
            {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        },
            {
            test: /\.(jpg|jpeg|gif|png)$/i,
            type: 'asset/resource',
        }
        ],

    },
    devtool: 'inline-source-map',

}