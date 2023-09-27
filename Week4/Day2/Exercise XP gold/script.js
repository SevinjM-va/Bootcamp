

// Ex 1
let landscape = () => {

  let result = "";
 
  let flat = (x)=>{
    for(let count = 0; count<x; count++){
      result = result + "_";
      console.log(result)


      
    }
  }
 
  let mountain = (x) => {
    result = result + "/"
    for(let counter = 0; counter<x; counter++){
      result = result + "'"
      console.log(result)
    }
    result = result + "\\"
  }
 
  flat(4);
  mountain(4);
  flat(4)
 
  return result;
 }
 
 landscape()


//  EX 2
const addTo = x => y => x + y;
const addToTen = addTo(10);

addToTen(3);

 console.log(addToTen(3));


//  Ex 3


const curriedSum = (a) => (b) => a + b;
curriedSum(30)
console.log(curriedSum(30)(1));



// Ex 4

const compose = (f, g) => (a) => f(11); 
const add1 = (num) => num + 1; //11
const add5 = (num) => num + 5; //15
compose(add1, add5)(10)
console.log(compose);
