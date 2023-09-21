
let btn = document.getElementsByTagName('button')
let col = document.querySelectorAll('.col');

col.forEach(element => {
  element.addEventListener('click', takeColor)
});


let smallbox = document.querySelectorAll('.smallbox');

function clearGameboard(smallbox){
  smallbox.forEach.style.background = '';
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

