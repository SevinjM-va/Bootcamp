
// // Ex1
// let food = ['dolma','ash','salat','kotlet','xingal','kabab'];
// let dinner = food[0];
// console.log(`My favourit dinner food is: ${dinner}`);




// // Ex2
// // Part 1
// // 1
// const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// const myWatchedSeriesLength = myWatchedSeries.length;

// console.log(myWatchedSeriesLength);

// // 2
// const myWatchedSeriesSentence = myWatchedSeries.toString();
// console.log(myWatchedSeriesSentence);

// // 3
// console.log(`I watched ${myWatchedSeriesLength} series ${myWatchedSeriesSentence}`);

// // Part 2
// // 1
// let changeSeries = myWatchedSeries.splice(2, 1, "Friends");
// console.log(myWatchedSeries);

// // 2
// let lastSeries = myWatchedSeries.push('Nature');
// console.log(myWatchedSeries);

// // 3
// let firstSeries = myWatchedSeries.unshift('Nature');
// console.log(myWatchedSeries);

// // 4
// let deletedSeries = myWatchedSeries.splice(1,1);
// console.log(myWatchedSeries);

// // 5
// let aa = deletedSeries.toString();
// console.log(aa);
// let bb = a.charAt(2);
// console.log(bb);

// // 6
// console.log(myWatchedSeries );


// // Ex 3
// // 1,2

// let tempCelsius = prompt(`Enter the temperature with Celcius: `);

// let tempFahrenheit = (tempCelsius * 9) /5 + 32;
// console.log(`${tempCelsius} is ${tempFahrenheit}`);

// tempFahrenheit = (tempFahrenheit - 32) * (5/9);
// console.log(tempFahrenheit);

// Ex 4
let c;
let a = 34;
let b = 21;

// 1
console.log(a+b) //Easy
// It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;

// 2
console.log(a+b) //second expression
// It will output 23 too, because 2 and 21 are numbers and it will take the last a;
// Actual: 23

// 3
// There is no value of c. That's why undefined.

// 4
console.log(3 + 4 + '5');
// Two of them is number and the last one is String. We can't add the last one.
// So the answer is: 75; 
// 7- is a Number;
// 5-is String;

// Ex 5
typeof(15);
// Prediction: number
// Actual: number

typeof(5.5);
// Prediction: number
// Actual: number

typeof(NaN);
// Prediction: number
// Actual: property

typeof("hello")
// Prediction: hello
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: 1 is not equal to 2
// Actual: boolean

"hamburger" + "s"
// Prediction: string
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: They are not numbers
// Actual: NaN

"1" + "3"
// Prediction: both of them string
// Actual: 13

"1" - "3"
// Prediction: They are string 
// Actual: NaN

"johnny" + 5
// Prediction: string and number
// Actual: johnny5

"johnny" - 5
// Prediction: We can't deduct
// Actual:NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: boolean
// Actual: false

1 == "1"
// Prediction: boolean
// Actual: true

1 === "1"
// Prediction: one of them string the other one is number. === show they are not equal
// Actual: false








// Ex 6

5 + "34"
// Prediction: 5 number 34 string 534
// Actual: 534

5 - "4"
// Prediction:5 number 4 string NaN
// Actual: NaN

10 % 5
// Prediction: nothing
// Actual: 0

console.log(5 % 10)
// Prediction: nothing
// Actual:

"Java" + "Script"
// Prediction: JavaScript
// Actual:JavaScript

console.log(" " + " ");
// Prediction: nothing
// Actual: nothing

" " + 0
// Prediction: sting and number 0
// Actual: 0

true + true
// Prediction: boolean or true
// Actual: 2

true + false
// Prediction: 0
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: 1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual:

"Bob" - "bill"
// Prediction: NaN
// Actual:NaN

