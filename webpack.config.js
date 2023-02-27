const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const WebpackBar = require("webpackbar");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    open: true,
  },
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: false,
    warnings: true,
    publicPath: false,
  },
  module: {
    rules: [
      // Configure SCSS.
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      // Configure vue-loader
      {
        test: /\.vue$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "vue-loader",
        },
      },

      // Configure Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // Configure html-loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // ?
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
