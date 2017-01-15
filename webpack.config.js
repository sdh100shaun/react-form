var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");
var path = require('path');
var isProd = (process.env.NODE_ENV === 'production');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

function getPlugins(){
    var plugins = []

    if(isProd)
    {
        plugins = [
            new ExtractTextPlugin("./dist/css/[name].css"),
            new webpack.DefinePlugin({
                'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                },
            }),
            new webpack.optimize.UglifyJsPlugin({
            comments: false, // remove comments
            compress: {
                unused: true,
                dead_code: true, // big one--strip code that will never execute
                warnings: false, // good for prod apps so users can't peek behind curtain
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                drop_console: true, // strips console statements
                sequences: true,
                booleans: true,
            }
            })
        ]
    }
    else
    {
    
        plugins = [
            new ExtractTextPlugin("./dist/css/[name].css"),
            new webpack.DefinePlugin({
                'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                },
            }),
            new DashboardPlugin(),
            new BrowserSyncPlugin(
      // BrowserSync options 
      {
        // browse to http://localhost:3000/ during development 
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint 
        // (which should be serving on http://localhost:3100/) 
        // through BrowserSync 
        proxy: 'http://localhost:8080'
      },
      // plugin options 
      {
        // prevent BrowserSync from reloading the page 
        // and let Webpack Dev Server take care of this 
        reload: false
      }
    )
        ]
    }
    return plugins;
}
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
    plugins: getPlugins()
};