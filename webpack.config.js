const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './popup.js',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: './popup.html',
    filename: 'popup.html'
    }),
        new CopyPlugin({
          patterns: [
            { from: "./manifest.json" },
            { from: "./background.js" },
            { from: "./content.js" },
          ],
        }),
      ],
};
