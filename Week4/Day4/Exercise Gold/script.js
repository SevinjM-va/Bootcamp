

// Ex 1

const printFullName = (obj)=>{
  const {first:a, last: b} = obj;
  return `Your full name is ${a + ' ' + b}`;
}
console.log(printFullName({first:'Elie',last: 'Shoppik'}));

// Ex 2

let keysAndValues = (key, value)=>{
  console.log(sort(key))
  console.log(value)
}
// console.log
(keysAndValues({a: 2, b: 5, c: 9}));