
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
const roundbtn = document.getElementById('round');

const screenImg = document.getElementById('screenImg');

const h2 = document.querySelector('h2');
const p_degree = document.getElementById('degree');
const p_height = document.getElementById('height');
const p_weight = document.getElementById('weight');
const p_type = document.getElementById('type');


let num;


 const randomPokemon = async ()=>{
  loading('visible');
  num = Math.floor(Math.random() * (21-1)+1);
  console.log(num)
  pokemon(num)
  return num;
}
function previous(){
  if (num > 0 && num < 21){
    num++;
    console.log(num);
    pokemon(num)
  } else {
    alert('Oh no! That Pokemon is not available…')
  }
 
}

function next(){
  num--;
  console.log(num);
  pokemon(num)
}
function loading(style){
  const load = document.querySelector('.fa-solid');
  if( style === 'visible'){
    load.style.visibility = 'visible';
    load.style.fontSize = '100px';
    h2.textContent = '';
    p_degree.textContent = '';
    p_height.textContent = '';
    p_weight.textContent = '';
    p_type.textContent = '';
  } else {
   load.style.visibility = 'hidden';
   load.style.fontSize = '1px';
  }
}


async function pokemon(num){
  const fet = await fetch ('https://pokeapi.co/api/v2/pokemon');
  const changeJson = await fet.json();
  const data = changeJson.results[num];
  try {
    
  } catch (error) {
    alert('ops')
  }
  // console.log(data)
  return details(data);
}

async function details (data){
  setTimeout(async function() {
  const deleteFirstLetter = data.name.substring(1);
  const firstLetter = data.name[0].toUpperCase()+ deleteFirstLetter;
  h2.textContent = firstLetter;
  const degreeUrl = await fetch(data.url);
  const toJSon = await degreeUrl.json();
  console.log(toJSon);
  loading('hidden');
  screenImg.src = toJSon.sprites.front_default;
  p_degree.textContent = `Pokemon n\xB0: ${toJSon.base_experience}`;
  p_height.textContent = `Height: ${toJSon.height}cm`;
  p_weight.textContent = `Weight: ${toJSon.weight}gr`;
  p_type.textContent = `Type: ${toJSon.types[0].type.name}`;
  }, 1000);
}


roundbtn.addEventListener('click', randomPokemon);
leftbtn.addEventListener('click', previous);
rightbtn.addEventListener('click', next);