'use strict'
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const webpackProdConfig = merge(baseWebpackConfig, {})
module.exports = webpackProdConfig;