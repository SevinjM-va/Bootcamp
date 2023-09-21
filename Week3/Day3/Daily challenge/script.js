let input = document.getElementById('onlyText');
let container = document.getElementById('container');

// function choiceLetter(event){
//   console.log(event);
// //   if (
// //     String.fromCharCode(event.keyCode) !== '%' &&
// //     (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key))
// //   ){
// //     console.log(input);
// // }
// }

input.addEventListener('keydown', (e) => {
  console.log(e.key);
  const inputKey = e.key;
  const regex = /[a-zA-Z]/;

  if (regex.test(inputKey)) {
    const p = document.createElement('p');
    p.textContent = inputKey;
    container.appendChild(p);
  }
});
