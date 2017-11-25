// import webpack from 'webpack'
// import path from 'path'
const path = require('path')

module.exports = {

    entry: './app/ReactApp.jsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname,'/disk'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015','react']
            }
          }
        },{
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
               loader: "style-loader"
            },{
               loader: "css-loader"
            }
          ]
        },{
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
               loader: "style-loader"
            },{
               loader: "css-loader"
            },{
              loader: "less-loader"
            }
          ]
        }
      ]
    }

}
