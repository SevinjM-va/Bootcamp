// console.log("Start of script");

// setTimeout(function() {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");


// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();




// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random?categories=science');


// xhr.send();
// xhr.responseType = 'json';
// xhr.onload = function() {
//   if (xhr.status != 200) {
//    console.log('wrong'); 

//   } else { 
//     console.log(xhr.response); 
//   }
// };

// xhr.onerror = function() {
//   alert("Request failed");
// };


let form = new FormData(document.forms.container);
let f = Object.fromEntries(form);


console.log(f.)