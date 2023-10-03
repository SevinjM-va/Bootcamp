
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

const swap = (arg)=>{
console.log()
}

console.log(swap('The Quick Brown Fox'));