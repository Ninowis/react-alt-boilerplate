const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: [
      './src/index.js',
      './src/sass/app-styles.scss'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'styles.css',
                outputPath: 'css/',
                publicPath: '../'
              }
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader', options: { sourceMap: (argv.mode === 'development') } },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: (argv.mode === 'development'),
                plugins: () => [
                  require('postcss-preset-env'),
                  require('cssnano')
                ]
              }
            },
            { loader: 'sass-loader', options: { sourceMap: (argv.mode === 'development') } }
          ]
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: './fonts/',
              publicPath: '../fonts/'
            }
          }
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "./",
      filename: "main.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 3000,
      publicPath: "http://localhost:3000/",
      hotOnly: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CopyWebpackPlugin([
        { from: './public/favicon.ico' }
      ]),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html'
      })
    ]
  }
};