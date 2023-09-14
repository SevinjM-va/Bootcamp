
const numbers = [5,0,9,1,7,4,2,6,3,8];

// 1. Using the .toString() method convert the array to a string.
let numbersToString = numbers.toString();
console.log(numbersToString);

//2.  Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
let numbersWithJoin = numbers.join(' ');
console.log(numbersWithJoin);
let numbersWithJoin2 = numbers.join('+')
console.log(numbersWithJoin2);
let numbersWithJoin3 = numbers.join("")
console.log(numbersWithJoin3);

// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]

for (let i = 0; i < 1; i++){
 let bubbleSort = numbers.sort();
 bubbleSort.sort(function(a, b) {return b-a})
  console.log(bubbleSort);
}

// !!! buble sort algorithmi deyil amma netice duzdur