'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  PORT: '3002',
  baseUrl:"'http://aaa.com'"
})
