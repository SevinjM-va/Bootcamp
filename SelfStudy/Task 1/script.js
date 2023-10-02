




let colors = ['red','blue','green','yellow','brown','pink','lightgreen','gray','orange','purple','white','gray','violet','lightgreen']


const html =`
  <div class= "colorName">Background Color: None</div>
  <button>Click me</button>
`

const changeColor = () =>{
    let div2 = document.querySelector('.colorName');
    let index = Math.floor(Math.random() * (13 - 0 + 1) + 0); 
    console.log(index);
    div2.textContent = `Background Color: ${colors[index]}`;
    div.style.backgroundColor = `${colors[index]}`;
  }


let div = document.createElement('div');
div.classList.add('container');
div.innerHTML = html;
document.body.appendChild(div);

let button = document.querySelector('button');
button.addEventListener('click', changeColor);


