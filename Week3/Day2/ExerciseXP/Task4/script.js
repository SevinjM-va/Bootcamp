
let radius = document.querySelector ('[name=radius]').value;

let volume = document.querySelector ('[name=volume]').value;

let btn = document.getElementById('submit');

btn.addEventListener('click',calcul);

function calcul(){
  radius =  Math.abs(radius);
 let volume = 4/3 * Math.PI * Math.pow(radius, 3);
 volume =  volume.toFixed(4);
}