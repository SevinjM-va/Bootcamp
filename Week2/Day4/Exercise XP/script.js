
// Ex 1

function infoAboutMe(){
  console.log(`My name is Sevinj`);
}
infoAboutMe();

console.log('========================');
// Part2

function infoAboutPerson(personName, personAge, personFavoriteColor){
  console.log(`Your name is ${personName}.`)
  console.log(`You are ${personAge} years .`)
  console.log(`Your favourite color is ${personFavoriteColor}.`)
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");



// Ex 2


// function calculateTip(){
//   let bill = prompt('Enter amount of the bill,please!');
//   if (bill <= 50) {
//     let tip = (bill * 20)/100;
//     return `You must pay:`+ (Number(tip) + Number(bill)) ;
//   } else if (bill > 50 && bill <= 200){
//     let tip = (bill * 15)/100;
//     return `You must pay:`+ (Number(tip) + Number(bill))
//   } else if (bill > 200) {
//     let tip = (bill * 10)/100;
//     return `You must pay:`+ (Number(tip) + Number(bill))
//   }
// }
// let finalTip = calculateTip();
// console.log(finalTip)

console.log('========================');

// Ex 3



let sum = 0;
let arr = [];
function isDivisible() {
  
  for (let i = 0; i < 500; i ++) {
   

    if (i % 23 == 0 ){
      arr.push(i);
      sum = sum + i;
    }
    }
    return `Output: ${arr} 
    Sum: ${sum}`;
  }

let answer = isDivisible();
console.log (answer);

console.log('========================');

let sum2 = 0;
let arr2 = [];
function isDivisible2(divisor) {
  
  for (let i = 0; i < 500; i ++) {
  
    if (i % divisor == 0 ){
      arr2.push(i);
      sum2 = sum2 + i;
    }
    }
    return `${arr2} numbers divisible by ${divisor} and their sum is: ${sum2}`;
  }

let answer2 = isDivisible2(3);
console.log (answer2);



// Ex 4


const stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}  
const prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry":10
} 

let shoppingList  = [
  'banana','orange', 'apple'
]


function myBill(){

  for (let item of shoppingList){

  if (stock[item] > 0){
    console.log(`${item} is  ${prices[item]} $`);
  } else {
    console.log(`${item} is not in the stock`);
  }
}
}
myBill();

console.log('========================');

// Ex 5

function changeEnough(itemPrice, amountOfChange){

  let amountQuarter = amountOfChange[0] * 0.25;
  let amountDimes = amountOfChange[1] * 0.10;
  let amountNickel = amountOfChange[2] * 0.05;
  let amountPenny = amountOfChange[3] * 0.01;
  let sum = amountQuarter + amountDimes + amountNickel + amountPenny;


  if (sum > itemPrice){
      return true;
    } else {
      return false;
    }
    return sum
  }

let finish = changeEnough(4.25, [25, 20, 5, 0])
console.log(finish);


console.log('========================');

// Ex 6

// 1
///  !!!!  ÇOX ÇƏTİN İDİ.Çox cəhd etdim  YENƏ DƏ İŞLƏMƏDİ!
// 4-də problemlidir!!!!


function hotelCost(){
  let ask;
  do {
    ask = prompt(`How many nights would you to star?`);
  } while (!isOnlyNumbers() || ask === undefined); 
  console.log(hotelCost());
//  if {
//     let totalPrise = ask * 140;
//     return `The Total Prise is ${totalPrise}`;
//   } else {
//     return ask;
//   }
  }
  // let total = hotelCost()
  // console.log(total);


  function isOnlyNumbers (str){
    let regex = (RegExp(/^[0-9]*$/))
  }
// 2

// function planeRideCost(){

//   let ask = prompt('Destination,please:')
//   if (typeof(ask) === 'string'){
//     if (ask == 'London'){
//       return`${ask}: $183`
//     } else if (ask == 'Paris'){
//       return`${ask}: $220`
//     } else {
//       return `All other destination: 300$`
//     } 
//   }
// }

// let end = planeRideCost();
// console.log(end);

// 3
// function rentalCarCost(){
//   let ask = prompt('How many days would you like to rent a car?');
//   if (typeof(ask) == !isNaN ){
//     if (ask < 10){
//       let calcul = ((ask * 40) * 5)/100;
//       return calcul;
//     } else {
//       let calcul = ask * 40;
//       return calcul;
//     }
   
//   } 
// }
// let total1 = rentalCarCost();
// console.log(`Total amount is: ${total1}`)




// // 4
// function totalVacationCost(){
//   return `The car cost: ${total}, the hotel cost: ${end} , the plane tickets cost ${total1}`;
// }
// let threeOfThem = totalVacationCost();
// console.log(threeOfThem);