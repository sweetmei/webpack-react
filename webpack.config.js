/*
 * @Author: your name
 * @Date: 2021-04-02 14:21:20
 * @LastEditTime: 2021-04-14 10:27:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',  //入口文件
  output: {
    filename: 'bundle.js',  //编译得文件名称
    path: path.resolve(__dirname, 'dist'), //编译得文件地址
  },
  resolve:{
    alias:{
      '@pages': path.resolve(__dirname,'src/pages'),
      '@utils': path.resolve(__dirname,'src/utils')
    }
  },
  // 启用相应模式（development,production）下的webpack内置的优化
  mode: 'development',
  devServer: {
    // 实现实时更新，
    // 告诉dev server 在哪里查找文件
    contentBase: './dist',  //
    host: 'localhost',
    port: 9000,
    hot: true,
  },
  // 编译后映射到源代码，方便错误调试
  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin(),  //
    new HtmlWebpackPlugin({
      title: 'project-test', //这个显示是html文件得title
    }),
    new webpack.HotModuleReplacementPlugin()
 
  ],
  // webpack 自身只能理解js,引入loader可以将所有类型的文件转换为webpack可以识别的有效模块。
  // loader有两个目标， 
  //  test 用于标识出应该被对应的 loader 进行转换的某个或某些文件
  //  use 表示进行转换时，应该使用哪个 loader。   

  // webpack5规则包括三部分： 规则条件，规则结果，嵌套规则
  module: {
    parser: {
      javascript: {
        //为commonjs启用魔法注释
        commonjsMagicComments: true,
      },
    },
    rules: [
      {},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }

}

/**
 * 开发环境(development)和生产环境(production)的构建目标差异很大。
 * 在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)
 * 或热模块替换(hot module replacement)能力的 source map 和 localhost server。
 * 而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。
 * 由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。
 */