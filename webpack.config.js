const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {

  let  isDevMode = argv.mode === 'development'

  return {
    mode: argv.mode,
    entry: [
      './src/index.js',
      './src/sass/app-styles.scss'
    ],
    devtool:  isDevMode ? 'source-map' : 'none',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            isDevMode ? { loader: 'style-loader', options: { sourceMap:  isDevMode } } : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap:  isDevMode } },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap:  isDevMode,
                plugins: () => [
                  require('postcss-css-reset')(),
                  require('postcss-preset-env')(),
                  require('cssnano')()
                ]
              }
            },
            { loader: 'sass-loader', options: { sourceMap:  isDevMode } }
          ]
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          include: path.resolve(__dirname, 'public/fonts'),
          use: {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: './fonts/',
              publicPath: '../fonts/'
            }
          }
        },
        {
          test: /\.svg$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'public/fonts')
          ],
          loader: 'svg-inline-loader'
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
        { from: './public/favicon.ico' },
        { from: './public/images', to: './images' }
      ]),
      new MiniCssExtractPlugin({
        filename: "css/styles.css"
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      })
    ]
  }
};