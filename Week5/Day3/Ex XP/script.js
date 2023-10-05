
// Ex 1
// const compareToTen = (num)=>{
//   return new Promise((resolve, reject)=>{
//     if (num <= 10){
//       resolve ("Horayy");
//     } else {
//       reject ("Boom");
//     }
//   })
// }

// compareToTen(15).then(result => console.log(result)).catch (error => console.log(error));



// Ex 2

// const promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(resolve){
//       resolve('Success');
//     } else {
//       reject('rejected');
//     }
//   }, 4000)
// }).then(result => console.log(result));



// Ex 3

let num = 3;
const x = new Promise((resolve, reject)=>{
  if(num === 3){
    resolve('value');
  } else {
    reject('error')
  }
}).then(result => console.log(result));

let mes = 'Boo';
const y = new Promise((resolve, reject)=>{
  if(mes != 'Boo'){
    resolve('WORK');
  } else {
    reject('error');
  }
}).then(result => console.log(result)).catch(result => console.log(result));