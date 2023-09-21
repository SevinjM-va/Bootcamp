
let btn = document.getElementsByTagName('button')
let col = document.querySelectorAll('.col');

for(let element of col){
  element.addEventListener('click', takeColor)
};


let smallbox = document.querySelectorAll('.smallbox');

function clearGameboard(){
 for (let element of smallbox){
 element.style.background = 'white';
}
}


for (let element of smallbox){
  element.addEventListener('click', putColor)
};

let propColor;

function takeColor(e){
  propColor = e.target.style.backgroundColor;
  console.log(propColor);
}

function putColor(e){
  console.log(propColor);
  e.target.style.background = propColor;
  console.log(e);
}

let ismouse = false;

for (let element of smallbox) {
  element.addEventListener('mousedown', down)
  element.addEventListener('mouseup', up)
  element.addEventListener('mouseover', over)
};


function down(e){
  ismouse = true;
  e.target.style.background = propColor;
  console.log(propColor);
}
function up(){
  ismouse = false;
}

function over (e){
  if (!ismouse){
    return
  } 
  e.target.style.background = propColor;
}