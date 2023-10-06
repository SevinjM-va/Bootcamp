
// // Ex 1

// let yearMaria = 1990;
// let yearKate = 1976;

// function ageCalcul() {
//   let age1 = 2024 - yearMaria;
//   let age2 = 2024 - yearKate;

//   if (age1 > age2){
//     alert('Kate is younger than Maria');
//     let half =  age1 / 2;
//     let year = yearKate + half;
//     alert(`Kate will be ${half} in ${year}`);
//   } else if (age1 < age2){
//     alert('Maria is younger than Maria');
//     let half =  age1 / 2;
//     let year = yearKate + half;
//     alert(`Maria will be ${half} in ${year}`);
//   }
  
//   console.log(age1,age2)
// }
// let a  = ageCalcul()
// console.log(a)

// Ex 2


// let zipCode = Number(window.prompt('Enter your zip code, please!'));
// console.log(zipCode);
// if ( zipCode !== RegExp('^[0-9]$')){
//   alert ('Error')
// } else {
//   alert ('Success')
// }


// Ex 3

let word = prompt('Enter the word, please');

function a (){

  let removeVovels = word.replace(/[aeiouAEIOU]/g,'')
  
  console.log(removeVovels);

  let numbers = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  
  //  ! BURDA NƏ SƏHV VAR Kİ İŞLƏMİR?
  let replaceVovels = word.replace(/[aeiouAEIOU]/g, (match) => numbers);


  console.log(replaceVovels);
}

  a();
