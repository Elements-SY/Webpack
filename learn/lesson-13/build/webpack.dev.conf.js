'use strict'
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const { dev } = require('../config')
const webpackDevConfig = merge(baseWebpackConfig, dev)
module.exports = webpackDevConfig;