const config = require("../config");
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      shared: path.resolve(__dirname, '../store-shared')
    },
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
             
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  }
};
