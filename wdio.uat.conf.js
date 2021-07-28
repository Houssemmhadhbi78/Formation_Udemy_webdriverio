//merge parent conf object + add new changes in uat conf fir example( baseurl , connectiontime)
const merge = require('deepmerge')  // deepmerge is a commande in JS to merge config from "wdio.config.js"
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {

baseUrl : 'http://rahulshettyacademy.com',
waitforTimeout: 5000,

mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep:"sanity"
},

})