
// Ex 1

// 1. Loop through the array above and determine whether or not each number is divisible by three.
// 2.  Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7]

for (let i = 0; i < numbers.length; i++){
  let divide = numbers[i] % 3;
  if (divide == ''){
    console.log(`True`);
  } else {
    console.log(`False`);
  }
} 



// Ex 2


// !!! Bunu etməyə kömək edərsiniz? Bacarmıram(
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

console.log('=============================');

// 1. Prompt the student for their name.
// let studentName = prompt('Enter your name!');

// for (let i = 0; i < guestList.length; i++ )
// if (studentName == guestList[i]) {
//   console.log(`Hi! I'm ${studentName}, and I'm from ${item[0]}`)
// }

// !!! correct way
// !!! gelen propmtun olub olmamasini yoxlayirsan eger varsa console log yoxdursa hemin value undefined falsy value oldugu ucun if e girmir
// if(guestList[studentName]){
//     console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}`);
// }

// !!! 

// Ex 3
let age = [20,5,12,43,98,55];

// 1. Console.log the sum of all the numbers in the age array.
let sum = 1;
for (let i = 0; i < age.length; i++){
  sum = sum * age[i];
 
  // !!! sum += age[i]; sum dedikce cemi isteyir
   console.log(sum);

} 
// 2. Console.log the highest age in the array.
console.log(sum);

// !!! Correct way
let maxAge=0
for (let i = 0; i <age.length; i++) {
  for(let j = 0; j <age.length-1; j++) {
 if(age[i]<age[j]) {
  maxAge = age[j];
 }else{
  maxAge = age[i]
 }
}
}
console.log(maxAge);

// !!! 
