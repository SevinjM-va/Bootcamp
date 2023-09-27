

// let multiply = (a,b) => a * b;
// let multiply2 = (a) => (b) => a * b;
// let multiply3 = multiply2(10)

// console.log(multiply3(10))


// let func = (f,g) => (a) => (f(g(a)));

// let sum = (num)=> num + 1;

// console.log(func(sum,sum)(5));




// function yoxla (name){
//   function condur(){
//     return name === 'Con'; 
//   }
// if (condur()) {
//   alert('yes');
// }
// }

// yoxla('Con');

// function verify (name) {   
//   function isJohn() {            
//       return name === "John";             
//   }
//   if (isJohn()) {
//       alert("Yep, this is John");
//   }
// }
// verify("John");

// function add() {
//   let counter = 0;
//   function plus() {
//       counter += 1;
//       console.log(counter) ;
//   }
//   plus();  
// }

// add()




// let myCar = new Object();

// let daxili = 'Model';
// myCar[daxili] = "Mercedes";

// daxili = 'Color';
// myCar[daxili] = 'blue';

// console.log(myCar);

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);