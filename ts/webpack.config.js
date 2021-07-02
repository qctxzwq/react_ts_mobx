// @ts-nocheck
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 入口
  entry: "./src/index.ts",
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {},
  mode: "development",
  // 使用的模块
  module: {
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 使用的loader
        use: 'ts-loader',
        // 排除的文件
        exclude: /node_moules/
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是一个自定义的title"
      template: "./public/index.html"
    })
  ],
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"]
  }
}