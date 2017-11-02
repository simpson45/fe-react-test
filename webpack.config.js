var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextWebpackPlugin("[name].css")
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            //{ test: /\.js$/, loader: 'react-hot-loader', exclude: /node_modules/},
            { test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins: ['transform-runtime']
                    }
                }
            },
            { test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins: ['transform-runtime']
                    }
                }
            },
            { test: /\.css$/,
                use: ["style-loader", "css-loader"]
                //use: ExtractTextWebpackPlugin.extract({ fallback: "style-loader", use: "css-loader"})
            }
        ]
    }
};
