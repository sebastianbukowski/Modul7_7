const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
              
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                    loader: 'css-loader',
                        options: {
                            import: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include : path.join(__dirname, '../src/images'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }   
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, '../src/components'),
                use: {
                  loader: 'html-loader',
                  options: {
                    interpolate: true
                  }
                }
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Golden",
        fileName: 'dist/index.html',
        template: 'src/index.html'
    })],
    devServer: {
        contentBase: './src',
        open: true
    },

};