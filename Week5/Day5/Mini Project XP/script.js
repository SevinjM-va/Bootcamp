
let btn = document.querySelector('#btn');
let namee = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birthYear');
let homeWorld = document.querySelector('#homeWorld');





function loading(style){
  let load = document.querySelector('.fa-solid');
  if (style === 'visible'){
    load.style.visibility = style;
    load.style.fontSize = '150px';
    load.style.padding = '55px';
    namee.textContent = '';
    height.textContent = '';
    gender.textContent = '';
    birthYear.textContent = '';
    homeWorld.textContent = '';
  } else {
    load.style.visibility = style;
    load.style.fontSize = '10px';
    load.style.padding = '0px';
 
  }
}


async function randomChoise (e){
  await e.preventDefault()
  loading('visible');
  const id = Math.floor(Math.random()* (84 - 1)+ 1);
  return apiData(id);
}  


async function apiData (id){
const url = 'https://www.swapi.tech/api/people/' + id;
const fetches = await fetch(url);
const changeJson = await fetches.json();
const properties = await changeJson.result.properties;
console.log(properties);
loading('hidden');
insideDiv(properties);
}

async function hw (link){
  console.log(link)
  const fet = await fetch (link);
  const changeJS = await fet.json();
  const result = changeJS.result.properties.name;
  homeWorld.textContent = (`Home World:${result}`);
}


const insideDiv = (properties)=>{
  
  console.log(properties)
  namee.textContent = properties.name;
  height.textContent = (`Height: ${properties.height}`);
  gender.textContent = (`Gender: ${properties.gender}`);
  birthYear.textContent = (`Birth Year: ${properties.birth_year}`);
  const link = properties.homeworld
  hw(link);
  
  }



btn.addEventListener('click', randomChoise);