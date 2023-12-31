

// // Ex 1

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums"
// ];


// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(async (url) =>{
//     const f =  fetch(url); // await -i sildim!
//     return f.json()

// }));



// console.log('users', users);
// console.log('posta', posts);
// console.log('albums', albums);
// }

// getData().catch(error => console.log(error,'oooooooops'));





// // Ex 2

// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("slow");
//           console.log("slow promise is done");
//       }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("fast");
//           console.log("fast promise is done");
//       }, 1000);
//   });
// };


// let concurrentPromise = function () {
//   console.log('==CONCURRENT START with Promise.all==');
//   return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//       console.log(messages[0]);
//       console.log(messages[1]);
//   });
// }

// setTimeout(concurrentPromise, 1000)




// // Ex 3

// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("slow");
//           console.log("slow promise is done");
//       }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("fast");
//           console.log("fast promise is done");
//       }, 1000);
//   });
// };

// let parallel = async function () {
//   console.log('==PARALLEL with await Promise.all==');
//   // Start 2 "jobs" in parallel and wait for both of them to complete
//   await Promise.all([
//       (async () => console.log(await resolveAfter2Seconds()))(),
//       (async () => console.log(await resolveAfter1Second()))()
//   ]);
// }

// setTimeout(parallel, 5000)



// Ex 4

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("slow");
          console.log("slow promise is done");
      }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise(resolve => {
      setTimeout(function () {
          resolve("fast");
          console.log("fast promise is done");
      }, 1000);
  });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)