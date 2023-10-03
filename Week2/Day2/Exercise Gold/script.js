
// Ex 1
// let language = (prompt('In which language can you speak? '));

// let languageconvert = language.toLowerCase();

// switch (languageconvert) {
//  case 'english':
//   console.log('Hello');
//   break;
// case 'french':
//   console.log('Bonjour');
//   break;
// case 'hebrew':
//   console.log('Shalom');
//   break;
// case 'turk':
//   console.log('Merhabalar');
//   break;
// case 'russian':
//   console.log('Здравствуйте');
//   break;
// case 'german':
//   console.log('Hallo');
//   break;
// default:
//   console.log(`01110011 01101111 01110010 01110010 01111001`);
// }


// Ex 2

let grade = prompt("Enter your grade, please! ");

if (grade > 90){
  console.log(`A`)
} else if (grade > 80 && grade <= 90){
  console.log(`B`)
} else if (grade >= 70 && grade <= 80){
  console.log(`C`)
} else if (grade < 70){
  console.log(`D`)
}



// // Ex 3

let verb = prompt('Enter the verb: ');

let convertverb = verb.toLowerCase();

let search = convertverb.endsWith('ing');


if (verb.length >= 3 && !search ) {
  console.log(`${verb}ing`)
} 
else if ( verb.length >= 3 && search){
  console.log(`${verb}ly`)
} else {
  console.log(verb);
}

// !!! checked