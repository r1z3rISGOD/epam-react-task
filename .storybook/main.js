const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const custom = "../webpack.dev.js"
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new HtmlWebpackPlugin({
      template: "../src/index.html"
    }))

    config.module.rules({
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
    });

    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader"
      }
    });

    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    })

    return {
      ... config,
      resolve: custom.resolve,
      module: {
        ... config.module,
        rules: [... config.module.rules]
      }
    }
  }
}
