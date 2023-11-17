const a = require('lodash');
const math = require('./math');

console.log(math.add(5,4));

let sum = math.add(10,2);
let mult = math.multiply(10,2);

const arr = [5,8,6,3,4]
const mean = a.mean(arr)
console.log(mean);
