
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      }
    ]
  }
}