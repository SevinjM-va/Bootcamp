



// Ex 2
let winBattle = () => {
 return true
}
let experiencePoints; 
let a =  winBattle()? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints);

// Ex 3

let isString =(e)=>{
  if(typeof(e) === 'string'){
  return true
  } else {
    return false
  }
}
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));


// Ex 4
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// let ordercolor =()=>{
//   for(let i = 0; i < colors.length; i++){
//     console.log(`${i+1} choice is ${colors[i]}`);
//     if(colors[i] == 'Violet'){
//       console.log('Yeah')
//     } else {
//       console.log('No...')
//     }
//   }
// }
// ordercolor();
// console.log('==================');


// Ex 5
const colorss = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colorss.forEach((element, index)=>{
  index < 3? console.log(`${index+1}${ordinal[index+1]} choice is ${element}`)
  : console.log(`${index+1}${ordinal[0]} choice is ${element}`)
  }
)


// Ex 6

let bankAmount = 0;

const details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((elem)=>{
    let total = ((bankAmount + Number(elem) * 17)/100);
    console.log(total)
 
})
