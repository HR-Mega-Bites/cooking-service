const path = require('path');
const SRC_DIR = path.join(__dirname, '/public/src');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
       }
     ]
   },
   resolve: {
     extensions: ['*', '.js', '.jsx']
   },
   output: {
     filename: 'bundle.js',
     publicPath: '/',
     path: DIST_DIR
   },
   devServer: {
    contentBase: './public/dist'
  }
};
