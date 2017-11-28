// import webpack from 'webpack'
// import path from 'path'
const path = require('path')

module.exports = {

    entry: './app/ReactApp.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/disk'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                    /\.less$/,   //新增项
                    /\.svg$/,    //新增项
                ],
            },

            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: [
                            ['import', {libraryName: 'antd', style: true}],
                        ],
                    }
                }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './postcss.config.js'
                            },
                        }
                    }

                ]
            }, {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),

                    {
                        loader: require.resolve('less-loader'),
                        options: {
                            modifyVars: {"@primary-color": "#1DA57A"},
                        },
                    },

                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //       config: {
                    //         path: './postcss.config.js'
                    //       },
                    //
                    //     }
                    //   }
                ]
            }
        ]
    },

    devtool: 'source-map',
    devServer: {}
}
