

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

// !!! object metodlarindan istifade edirik burada meselen entries keys values ve s.
// !!! object.enties()
// !!! daha sonra onu sort ede bilerik 
// !!! function da parametr kimi onjecti goturmelidi 

 console.log(keysAndValues({a: 2, b: 5, c: 9}));