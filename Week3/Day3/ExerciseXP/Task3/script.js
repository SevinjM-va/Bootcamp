
const yellowbox = document.getElementById('target');

const redbox = document.getElementById('box');


function start(){
  console.log();
}

function allowDrop(event){
  event.preventDefault();
  console.log(event);
  yellowbox.classList.add('boxhover');
}

function drag(event){
  console.log(event);
  yellowbox.classList.remove('boxhover');
  yellowbox.appendChild(redbox);

}