
const product = require('./product');

function a (name){
if (product.find(item => item.aname == name)){
  console.log('Found')
} 
}
a('table');
a('chair');