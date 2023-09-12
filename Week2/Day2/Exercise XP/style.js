
// Ex 1

let x = 12;
let y = 56;

if (x > y) {
  console.log(`${x} is the biggest number`);
} else {
  console.log(`${y} is the biggest number`);
}

// Ex 2

let newDog = 'Chihuahua';
console.log(newDog.length);

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase ());

if (newDog == 'Chihuahua'){
  console.log(`I love Chihuahuas, it’s my favorite dog breed!`);
} else {
  console.log(`I don't care, I prefer cats!`)
};

// Ex 3

// let numb = prompt('Enter your number!: ');

// if (numb % 2 == 0){
//   console.log(`${numb} is an even number`);
// } else {
//   console.log(`${numb} is an odd number`);
// }

// Ex 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log(users.length);

if (users.length == 0){
  console.log('No one is online');
} else if (users.length == 1){
  console.log(`${users[0]}`);
} else if (users.length == 2){
  console.log(`${users[0]} and ${users[1]} are online.`);
} else if (users.length > 2){
  console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`)
};