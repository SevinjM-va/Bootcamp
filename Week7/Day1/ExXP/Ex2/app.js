
import averAge from './data.js';

function arrFunc (){
  let a = 0;
  const sum = averAge.map(item =>{
  return a = item.age + a;
});
return a;
}
console.log(arrFunc())


