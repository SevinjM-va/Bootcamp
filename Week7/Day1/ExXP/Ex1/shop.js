
import product from './product';

function a (name){
if (product.find(item => item.name == name)){
  console.log('Found')
} 
}
a('table');
a('chair');