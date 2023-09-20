
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.


let div = document.getElementById('container');
let btn = document.getElementById('clear');
let p;



let time = setInterval(function(){
  p = document.createElement('p');
  p.innerHTML = 'Hello World';
  console.log(p);
  div.appendChild(p);

  
},2000);
console.log(time);
btn.addEventListener('click', function(){
  clearInterval(time);
  
})


