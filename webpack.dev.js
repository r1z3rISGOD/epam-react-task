const path = require('path');
const { merge } = require('webpack-merge');
const common = require("./webpack.common");
const webpack = require('webpack');

module.exports = merge(common,
    {
        mode: "development",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000,
            watchContentBase: true,
            progress: true,
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        "postcss-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
)
