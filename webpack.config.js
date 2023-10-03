const path = require('path');

module.exports = {
  entry: './popup.js',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
