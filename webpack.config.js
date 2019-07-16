const webpack =  require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var libraryName = 'store';

module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    resolve: {
        alias: {
          shared: path.resolve(__dirname, '/store-shared')
        },
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: libraryName + '.js',
        library: libraryName,
        //libraryTarget: 'umd',
        libraryTarget: 'commonjs2',
        //umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"],
                include: path.resolve(__dirname, "./src")
              },
              // {
              //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              //   loaders: ['file-loader'],
              //   include: path.resolve(__dirname, '../stories')
              // },
              {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                    },
                  },
                ],
            }
        ]
    },
    externals: {
        'prop-types': 'commonjs prop-types',
        'classnames': 'commonjs classnames',
        'react': 'commonjs react',
        'react-dom': 'commonjs react-dom',
        'styled-components': 'commonjs styled-components',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
            })
          ]
   },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}

