// Ex 1
// Part 1
const people = ["Greg", "Mary", "Devon", "James"];

// 1.Write code to remove “Greg” from the people array.
let gregRemove = people.shift();
console.log(people);

// 2.Write code to replace “James” to “Jason”.
let jamesReplace = people.splice(2, 1, 'Jason');
console.log(people)

// 3.Write code to add your name to the end of the people array.
let myName = people.push('Sevinj');
console.log(people)

// 4.Write code that console.logs Mary’s index. 
console.log(people.indexOf('Mary'));

// 5.Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.

let sliceMethod = people.slice(1, 3);
console.log(sliceMethod);

// 6.Write code that gives the index of “Foo”. 
console.log(people.indexOf('Foo'));

// 7.Create a variable called last which value is the last element of the array.

let last = people[3];
console.log(last);

// !!! people[people.length-1] den istife daha uygundur
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


console.log('==========================');

// Part 2
// 1.Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++){
  console.log(people[i]);
};

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
console.log('==========================');
let i = 0;

while (i < people.length){
  if (i == 'David');
  break;
}

console.log(people[i]);

// !!! buradki i 0 a beraberdir 0 people.lengthden kicik oldugu ucun while loop a girecek
// !!! i 0 oldugu ucun davide beraber ola bilmez
// !!! elave olaraq if sert verilib amma funksiyasi yazilmayib







// Ex 2
// 1. Create an array called colors where the value is a list of your five favorite colors.
let colors = ['blue','red','green','brown','gray'];

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++){
  console.log(`My ${i+1} choice is ${colors[i]}`)
}


// Ex 3
// 1. Prompt the user for a number.
// let num = prompt('Enter your number: ');

// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// console.log(typeof(num));

// 2. While the number is smaller than 10 continue asking the user for a new number.

// let number = Number(num);
// console.log(typeof(number));

// Tip : Which while loop is more relevant for this situation?

// let num = 0; 
// do {
//   num = prompt('Enter new number:')
//   console.log(num);
// } while (num < 10);

// Ex 4
// 1. Copy and paste the above object to your Javascript file.
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}
// 2. Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// 3.Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan);

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarah = building.numberOfRoomsAndRent.sarah[1];
console.log(sarah);
let david = building.numberOfRoomsAndRent.david[1];
console.log(david);
let dan = building.numberOfRoomsAndRent.dan[1];

if (sarah + david> dan){
  building.numberOfRoomsAndRent.dan.splice[1] = 1200;
  console.log(building);
} 

// !!! correct way example
if (sarah < dan ){
  building.numberOfRoomsAndRent.dan[1]= 1200
  console.log(building);
}

// !!!



// Ex 5

 let family = {
  mother: 'Lala', 
  father: 'John', 
  sister: 'Kate',
  brother: 'Tom',
}

for ( let item in family){
  console.log(item);
  console.log(family[item]);
}

// Ex 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

console.log('==========================');
for ( let item in details ){
console.log(item );
console.log(details[item]);
}


// Ex 7

console.log('==========================');
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let ABJKPS = names.sort();
console.log(ABJKPS);

// !!! taskda hemin arraydaki adamlarin bas herflerini birlesdirmeyini isteyir

// !!! correct way 

let output=[]

for (let user of names){

  output.push(user.charAt(0).toUpperCase())
  console.log(output);
}
console.log(output.join(''));

// !!! correct way