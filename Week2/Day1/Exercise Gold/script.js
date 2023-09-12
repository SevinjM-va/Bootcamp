

// Ex 1

let sentence = ["my","favorite","color","is","blue"];

let sentence1 = sentence.join(" ");
console.log(sentence1);


// Ex 2

// 1.Create 2 variables. The values should be strings.
let str1 = 'apple';
let str2 = 'pear';

// 2.Slice out and swap the first 2 characters of the two strings from part 1.
let change1 = str1.replace('ap','pa');
console.log(change1);


// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
 let str3 = `${str1} ${str2}`;

 
// 4. Finally console.log the new concatenated string.

 console.log(str3);

//  Ex 3

// 1. Prompt the user for the first number.
let user1 = prompt('First number: ');

// 2. Store the first number in a variable called num1.
let num1 = (+user1);

// 3. Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
console.log(+num1);

// 4. Prompt the user for the second number.
let user2 = prompt('Second number: ');

// 5. Store the second number in a variable called num2.
let num2 = (+user2);

// 6. Create an Alert where the value is the SUM of num1 and num2.
alert(num1 + num2);

// 7. BONUS: Make a program that can subtract, multiply, and also divide!
alert(num1 * num2);
alert(num1 - num2);
alert(num1 / num2);

