
// Ex 1
const isBlank = (alphabet)=>{
  if(alphabet.length <= 0){
    console.log(true)
  } else {
  console.log(false);
}
}
console.log(isBlank('')); //--> true
console.log(isBlank('abc')); //--> false


// Ex 2

const abbrevName =(arg)=>{
  let trim = arg.trim().split(' ');
  console.log(trim[0] +' '+ trim [1].charAt(0) + ' ')
}

console.log(abbrevName("   Robin Singh")); // --> "Robin S."

// Ex 3

// const swap = (arg)=>{

// let a = arg;

// if(a.toUpperCase() === letter){
//   console.log(a, 'defined')
// }
// console.log('tapilmadi')

// }

// console.log(swap('The Quick Brown Fox'));


console.log('==============')

// Ex 4

const a = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];



let result;
const func = (a)=>{

  for (let i = 0; i < a.length; i++){
    result = a[i].some((num => num == 3));
    console.log(result)
  }
}
func(a)
