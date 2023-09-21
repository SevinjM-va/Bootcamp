

// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

let yellowDiv = document.getElementById('container');
let redDiv = document.getElementById('animate');

let space = 0;
const myMove = () => {
  let moving =setInterval(moveRedDiv, 1);
}

function moveRedDiv(){
  if (space === 350)
  return
  space = space + 1;
  redDiv.style.left = space +'px';
  } 

