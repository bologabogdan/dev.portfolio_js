const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: { import: "./src/main.js", dependOn: "shared" },
    another: { import: "./src/another-module.js", dependOn: "shared" },
    shared: "lodash"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      // vue$: "vue/dist/vue.esm.js"
      vue$: "vue/dist/vue.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([{ from: "./public" }]),
    new HtmlWebpackPlugin(),
    new PreloadWebpackPlugin({
      rel: "preload",
      as: "script"
    })
  ]
};
