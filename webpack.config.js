const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
        open: true
    },
    module: {

        rules: [
            // Configure SCSS.
            {
                test:/\.scss$/,
                use: [{
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'sass-loader'
                  }
                ]
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
                  loader: 'babel-loader',
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                }
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
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
  };