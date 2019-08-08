'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
console.log(process.env.NODE_ENV,'dev.env.js')
module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  PORT: '3002',
  baseUrl:"'http://aaa.com'"
})
