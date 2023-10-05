


// 1st Challenge
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// const array = [promise1, promise2, promise3];

// Promise.all(array).then(element=>console.log(element)).catch(error=>console.log(error));


// 2nd Challenge
const latParis = document.querySelector('#latParis');
const longParis = document.querySelector('#longParis');
const latNewYork = document.querySelector('#latNewYork');
const longNewYork = document.querySelector('#longNewYork');

const form = document.querySelector('form');

function send (e){
  e.preventDefault();
  const latParisValue = latParis.value;
  const longParisValue = longParis.value;
  const latNewYorkValue = latNewYork.value;
  const longNewYorkValue = longNewYork.value;

  const paris = fetch("GET",`https://api.sunrise-sunset.org/json?lat=${latParisValue}&lng=${longParisValue}`);
  const newYork = fetch("GET",`https://api.sunrise-sunset.org/json?lat=${latNewYorkValue}&lng=${longNewYorkValue}`);

  Promise.all(paris, newYork).then(result => console.log(result));


}

form.addEventListener('submit', send)