// function logGreeting(){
//   console.log(`${myname} is JS developer`);
// }

// let myname='orxan';
// logGreeting();



// function logGreeting(myname){
//   let person =  myname + ` is JS developer`;
//   console.log(person);
// }

// logGreeting('orxan');



// function names(userName){ 
//   console.log(`${userName} indi aktivdir`);
// }
// names('Gultekin');



// function numBer(a, b, c){
//   if (a > b){
//     console.log(`${a} is greatest`)
//   } else if ( b > c)(
//     console.log(`${b} is greatest`)
//   ) else {  
//     console.log(`${c} is greatest`)
//   }
// }

// numBer(5, 3, 8);



// function myAge (birthyear) {
//   let myage = 2023 - birthyear
//   let mum = myage * 2
//   let dad = mum * 1.2
//   console.log(`My age is ${myage}`)
//   console.log(`My mum's age is ${mum}`)
//   console.log(`My dad's age is ${dad}`)
// }

// myAge(1990);


// function ages (myAge){
//   let mum = myAge * 2;
//   return (`My mum is ${mum} and she is twice my age`);
// }

// let value = ages(32);
// console.log(value);



const user = {
  name: "Random",
  age: 20,
  setAge(){
    return  this.age;
  },
  getYearBeforeRetirement(){
     return 60 - this.age
  },
}

console.log(`Your age is ${user.setAge()} and ${user.getYearBeforeRetirement()} year rest`);