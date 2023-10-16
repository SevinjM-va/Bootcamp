
// Ex 1

// const randomNum = Math.floor(Math.random() * (100 - 1) + 1);

// if (randomNum % 2 == 0){
//   console.log(randomNum);
//   for(let i = 0; i < randomNum; i++){
//     if(i % 2 == 0){
//       console.log(i);
//     }
//   }
// }

// Ex 2


// let a;
// function capitalizedLetters (string){

  // 1-ci usul!!!!

  // let result = [];
  // for (let i = 0; i < string.length; i++){
  //   if(i % 2 == 0){
  //     const upper = string[i].toUpperCase();
  //     result.push(upper);
  //   } else if (i % 2 == 1){
  //     const lower = string[i].toLowerCase();
  //     result.push(lower);
  //   }
  // }
  // const a = result.join('');
  // console.log(a);

  // 2-ci usul

//   a = string.split('').map((letter,index) => {
//     return index % 2 == 0? letter.toUpperCase(): letter;
//   }).join('');
//   console.log(a)
// }

// capitalizedLetters('abcde');


// Ex 3


function palindrome(word) {

  let check = word.toLowerCase();
  var revers = check.split('').reverse().join('');

  console.log( check === revers);
  console.log(check);
  console.log(revers);
}
palindrome('madam');

// Ex 4
const array = [-1,0,3,100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

function biggestNumberInArray(arrayNumber){
  if(arrayNumber.length > 0){
    const biggestNum = arrayNumber.filter(item => typeof item == 'number').sort((a,b)=>b-a);
    console.log(biggestNum[0]);
  } else {
    console.log('0');
  }
}
biggestNumberInArray(array);


// Ex 5

const list=[1,2,3,3,3,3,4,5];
function newArray (unique){
  const a  = [...new Set(unique)];
  console.log(a)
}
newArray(list); 