const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new Dotenv({
      path: "./.env/.development"
    })
  ]
};
