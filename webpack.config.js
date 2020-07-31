const path = require("path");

const baseDir = __dirname;
const dist = path.resolve(baseDir, "dist");
const ENV = process.env.NODE_ENV;
const isDev = ENV !== "production";

const javascript = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};

module.exports = {
  mode: ENV,
  entry: "./src/js/index.js",
  output: {
    path: dist,
    publicPath: dist,
    filename: isDev ? "./js/main.js" : "./js/main.[hash].js",
  },
  module: {
    rules: [javascript],
  },
  optimization: {},
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
