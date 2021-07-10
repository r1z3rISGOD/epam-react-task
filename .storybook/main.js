const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const custom = "../webpack.dev.js"
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
}
