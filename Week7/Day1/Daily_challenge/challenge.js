
const a  = require('./greeting');
const b  = require('./colorful-message');
const c  = require('read-file.js');

function greet (name){
  console.log(`${b.yellow('Hello')} ${a.name}`)
}
greet('Ali')
