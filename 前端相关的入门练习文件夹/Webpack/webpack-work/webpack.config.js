const path = require('path');   //引入node里面路径模块
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //html 模版插件, 会自动生成html模版

const config = {
    // mode: 'development',    //设置开发模式
    entry: {
        'index': ['./app/index.js']
    },
    output: {   //出口文件
        path: path.resolve(__dirname, 'dist'),   //输出路径（绝对路径）
        filename: 'js/[name].js',    //输出文件名称，name  会自动遍历entry里面的每一个 key为生成的js文件命名
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
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',   //模版路径
            filename: 'index.html',
            chunks: ['index'],     //选择加载的特定块
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
    ]
};

//全局模块导出，让所有的文件都依赖当前模块
module.exports = config;