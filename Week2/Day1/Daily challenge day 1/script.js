
// Ex1


const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1.Remove Banana from the array.
let removeB = fruits.splice(0,1);
console.log(fruits);

// 2.Sort the array in alphabetical order.
let sortAlphabetical = fruits.sort();
console.log(fruits);

// 3.Add “Kiwi” to the end of the array.
let addEnd = fruits.push('Kiwi');
console.log(fruits);

// 4.Remove “Apples” from the array. Don’t use the same method as in part 1.
let removeAp = fruits.shift(0);
console.log(fruits);

// 5.Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
let sortReverse = fruits.reverse();
console.log(sortReverse);


// Ex 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let fruitFirst = moreFruits[1] ;
let fruitSecond = fruitFirst[1];
let fruitString = fruitSecond.toString();

console.log(fruitFirst);s
console.log(fruitSecond);
console.log(fruitString);