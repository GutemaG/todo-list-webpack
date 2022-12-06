const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ], 
   output: {
     filename: 'index.js',
     path: path.resolve(__dirname, 'dist'),
   },
   mode: 'development',
   devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };