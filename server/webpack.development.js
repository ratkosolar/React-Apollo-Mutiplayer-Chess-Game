const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src/main.ts'),
  externals: [nodeExternals({})],
  mode: 'development',
  plugins: [new CleanWebpackPlugin(), new NodemonPlugin()],
  watch: true,
});
