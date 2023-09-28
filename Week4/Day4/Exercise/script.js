

// var employee = {    // Object we want to destructure
//   firstname: 'Jon',
//   lastname: 'Snow',
//   dateofbirth: '1990'
// };

// // Destructuring the object into our variables
// var { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);


// var employee = {    // Object we want to destructure
//   firstname: 'Jon',
//   lastname: 'Snow',
//   dateofbirth: '1990'
// };

// // Destructuring the object into variables with
// // different names than the object variables
// var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log( fn, ln, dob);

// var employee = {    // Object we want to destructure
//   firstname: 'Jon',
//   lastname: 'Snow',
//   dateofbirth: '1990'
// };

// // Destructuring the object into variables without 
// // assigning default values 
// var { firstname, lastname, country } = employee;
// console.log("Without setting default values")
// console.log( firstname, lastname, country);

// // Destructuring the object into variables by 
// // assigning default values 
// var { firstname = 'default firstname', 
//     lastname = 'default lastname', 
//     country = 'default country' } = employee;
// console.log("\n After setting default values")
// console.log( firstname, lastname, country);


// const shopping = [
//   ["apple", "$2"],
//   ["pear", "$1"],
//   ["banana", "$0.77"],
// ];

// const shoppingObject = Object.
// fromEntries(shopping);
// console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }





let myObj = {
  name : "John",
  lastName : "Doe",
  age : 25,
  friends : ["Mark", "Lucie", "Ana"]
}
let k = Object.keys(myObj).length;
let v = Object.values(myObj).length;

console.log(`The x# key is: ${k}`);
console.log(`The x# value is: ${v}`);


let myCar = {
  color : 'blue',
  details : {
    plateNumber: 123,
    name : "Ford"
  }
}

let myNewCar = {...myCar}
console.log("myNewCar : ", myNewCar) 


// SHALLOW COPYING
myCar.color = "red"
console.log("myNewCar.color :", myNewCar.color)

console.log("myCar.color :", myCar.color)


// DEEP COPYING
myCar.details.plateNumber = 345
console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)

console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
// myCar.details.plateNumber : 345 : red -- CHANGED