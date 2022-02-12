const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
   entry: "./app/src/javascripts/app.js",
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "app/dist"),
      clean: true,
   },
   module: {
     rules: [
       {
         test: /\.s[ac]ss$/i,
         use: [
           process.env.NODE_ENV !== "production"
             ? "style-loader"
             : MiniCssExtractPlugin.loader,
           "css-loader",
           "sass-loader",
         ],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
     ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./app/src/index.html",
         filename: "index.html",
         hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new CopyPlugin({
         patterns: [
           { from: path.resolve(__dirname, "app/src/assets"), to: "assets/" },
         ],
      }),
   ],
   optimization: {
      minimize: true,
      minimizer: ["..."],
   },
   devServer: {
      static: {
         directory: path.resolve(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
      open: true,
      liveReload: true,
   },
};
