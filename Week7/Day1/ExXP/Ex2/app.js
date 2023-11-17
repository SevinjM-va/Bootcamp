
import arr from './data.js';

function arrFunc (){
  let a = 0;
  const sum = arr.map(item =>{
  return a = item.age + a;
});
return a;
}
console.log(arrFunc())


