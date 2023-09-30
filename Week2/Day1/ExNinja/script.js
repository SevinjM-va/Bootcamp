
// Ex 1

console.log(5 >= 1) //true
console.log(0 === 1) // false
  console.log(4 <= 1) // false
    console.log(1 != 1) // false
      console.log("A" > "B") // false
      console.log("B" < "C") // false
      console.log("a" > "A") //false
      console.log("b" < "A") //false
      console.log(true === false) // false
        console.log(true != true) //false


// Ex 2
console.log('2'+'3'); //23


// Ex 3
function findNemo (sentence){
let found =  sentence.search('Nemo');
return found;
}
let showPlaceNemo = findNemo('My fish is called Nemo, I love it');

if (showPlaceNemo >= 0){
  console.log(`I found Nemo at ${showPlaceNemo}`)
} else {
  console.log(`I can’t find Nemo`);
}

// Ex 4

let nuM = prompt('Enter your number,please!');

let o = 'o'
if (nuM <= 2){
  console.log('boom');
} else {
  console.log(`B${o.repeat(nuM)}m`);
  
  if (nuM %2 === 0 ){
    console.log(`B${o.repeat(nuM)}m!`);
  }
  if (nuM%5 === 0){
    console.log(`B${o.repeat(nuM).toUpperCase(nuM)}M`);
  } 
  if (nuM %2 === 0 && nuM %5 === 0){
    console.log(`B${o.repeat(nuM).toUpperCase(nuM)}M!`);
  }
};
