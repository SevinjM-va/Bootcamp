
// Ex 1

// Prompt the user for several words (separated by commas).
let words = prompt('Enter several words,please');

// Put the words into an array.
let arr = words.split(' ')
console.log( arr);


// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.


let remem = 0;
function repeat(arr){

  
  console.log(arr)
  let lengthOfArray = arr.length;
  if (lengthOfArray > remem){
    remem = lengthOfArray; 
    console.log(remem)
  }
 
}
arr.forEach(repeat);
const numberOfStar = remem + 2;
console.log(numberOfStar);


let star = '';
for (let i = 0; i < numberOfStar; i++){
  star = star + "*";

  console.log(star);
}





