const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];


// let count = 0;
// let x = 0;
// for (let item of data){
//   x = (item.age * 7) + x
//   count++

// }
// console.log(Math.floor(x / count))

let onlyAges = data.filter((element) => {
  console.log(element.age);
});
let sumAges = onlyAges.reduce((acc,index)=>{
  console.log(`akk `+acc)
  console.log(`age`+ index)

}, 0);

console.log(sumAges)
