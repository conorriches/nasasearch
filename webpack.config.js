const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [path.join(__dirname, "/src/index.js")],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "/src/index.html"),
        filename: "./index.html"
    })],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
};