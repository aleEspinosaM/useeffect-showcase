const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const port = process.env.PORT || 3000;

const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};

module.exports = config;
