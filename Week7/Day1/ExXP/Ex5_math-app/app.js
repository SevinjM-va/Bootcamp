const a = require('lodash');
const math = require('./math');
console.log(math(5, 4));

let sum = math.add(10, 2);
console.log(sum);

// !!! lodash example
const randomNum = a.random(1, 100);
console.log('🚀 ~ file: app.js:12 ~ randomNum:', randomNum);
