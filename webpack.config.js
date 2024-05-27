const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
  target: "node",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new WebpackAssetsManifest({
      writeToDisk: true,
    }),
  ],
};
