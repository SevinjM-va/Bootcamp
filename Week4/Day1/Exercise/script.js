

// function age(year){
//   if (year > 2000){
//     console.log('You are in the 21st century')
//   } else{
//     console.log('You live in the Middle Age')
//   }
// }
// age(2003)



// function calcul(a, b){
//   let add = a > b? a-b : b-a;
//   let multiple =  a * b;

//   console.log(`Addition :${add}, Multiple: ${multiple}`)
// }
// calcul(5,4);


// const numbers = [10,11,12,15,20];
// numbers.forEach((e) => {
//   if( e%2 == 0){
//     console.log(e);
//   };
// });

// const words = ["wow","hey","bye"];
// let start = words.some((el) => el[0] == 'h');
// console.log(start)

const words = ["hello","hey","hola"];
let check = words.every((el) => el[0] == 'h');
console.log(check);