const path = require('path');   //引入node里面路径模块
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //html 模版插件, 会自动生成html模版
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //单独打包css 插件

const config = {
    // mode: 'development',    //设置开发模式
    entry: {
        'index': './app/index.js',
        'vender': ['react', 'react-dom']
    },
    output: {   //出口文件
        path: path.resolve(__dirname, 'dist'),   //输出路径（绝对路径）
        filename: 'js/[name].js',    //输出文件名称，name  会自动遍历entry里面的每一个 key为生成的js文件命名
        libraryTarget: "umd"
    },
    // 配置服务器
    devServer:{
        port : 9000,
        open : true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react"],
                    plugins: [
                        ["import", {libraryName: "antd", style: 'css'}]   //按需加载
                    ]
                }
            },
            {
                test: /\.es6$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // 单独抽离出css
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
                // 使用style-loader和css-loader将其加载到js中
                // use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
                loader: 'file',
            },
            {
                test: /\.jpg|\.png|\.jpeg|\.JPG$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',   //模版路径
            filename: 'index.html'
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            filename: '[name].js'
        })
    ],
    // externals: {
    //     'react': 'react',
    //     'react-dom': 'react-dom',
    //     // 'antd':'antd',
    //     // 'video.js': 'video.js'
    // }
};

//全局模块导出，让所有的文件都依赖当前模块
module.exports = config;