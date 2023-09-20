

let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');


button.addEventListener('click', function(){
  if(input.value.length > 0){
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
  }
})