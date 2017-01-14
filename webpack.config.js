var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    entry: "./src/main.js",
    output: { path: __dirname, filename: "./dist/bundle.js" },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]

                }
            }, {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract("style-loader", "css!sass?minimize=true&indentedSyntax=true&sourceMap=true")
            },
                , {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?minimize=true&indentedSyntax=true&sourceMap=true")
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/css/[name].css"),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            },
         }),
         new DashboardPlugin()
    ]
};