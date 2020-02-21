const merge = require('webpack-merge');
const job = require('./job');
const name = require('./name');
var people = merge(job, name);
console.log(people)