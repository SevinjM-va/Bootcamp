// const makeBurger = () => {
//   const meatType = getMeat();
//   const bunsType = getBuns();
//   const burger = putMeatBetwenBuns(bunsType, meatType);
//   return burger;
// };

// function getMeat() {
//   console.log("walking to the butcher...");
//   setTimeout(() => {
//       console.log("getting the beef from the butcher");
//       return "beef"
//   }, 2000);
// }

// function getBuns() {
//   console.log("getting the buns from the bakery");
//   return "whole grain";
// }


// function putMeatBetwenBuns(bunsType, meatType) {
//   console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//   return "Delicious Burger"
// }

// const burger = makeBurger();
// console.log(burger);



// function getMeat(callback) {
//   console.log("walking to the butcher...");
//   setTimeout(() => {
//       console.log("getting the beef from the butcher");
//       callback("beef");
//   }, 2000);
// }

// function getBuns(callback) {
//   console.log("getting the buns from the bakery");
//   callback("whole grains");
// }


// function putMeatBetwenBuns(bunsType, meatType, callback) {
//   console.log("preparing the burger...");
//   callback(`The ${meatType} burger with ${bunsType} buns is created`)
// }

// const makeBurger = () => {
//   getMeat((meatType) => {
//       getBuns((bunsType) => {
//           putMeatBetwenBuns(bunsType, meatType, (finalBurger) => {
//               console.log(finalBurger);
//           })
//       })
//   })
// }

// const burger = makeBurger();








const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("result1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject("result2");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("result3");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
.then((results) => {
console.log(results);
}).catch((error) => {
console.log(error);
});
// result2

Promise.allSettled([promise1, promise2, promise3])
.then((results) => {
console.log(results);
// results.map(r => {
//   console.log(`{ status: ${r.status}, value: ${r.value}, reason: ${r.reason} }`);
// })
})
//  [
//   { status: 'fulfilled', value: 'result1' },
//   { status: 'rejected', reason: 'result2' },
//   { status: 'fulfilled', value: 'result3' }
// ]


Promise.race([promise1, promise2, promise3])
.then((results) => {console.log(results);})
.catch((error) => {console.log(error);});
//result1