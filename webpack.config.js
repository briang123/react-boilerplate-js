const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", path.join(__dirname, "src/index.jsx")],

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dev"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff2?|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 15000 },
          },
        ],
      },
    ],
  },
  resolve: {
    // allows us to do absolute imports from "src"
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "DEV: React Boilerplate",
      template: path.join(__dirname, "src/index.html"),
      favicon: path.join(__dirname, "src/favicon.png"),
    }),
  ],
};
