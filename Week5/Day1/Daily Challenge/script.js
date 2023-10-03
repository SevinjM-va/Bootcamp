

let first = document.getElementById('name');
let second = document.getElementById('surname');
const form = document.querySelector('form');




form.addEventListener('submit', submit);

function submit(event){
  event.preventDefault();
  const name = form.name.name ;
  const nameValue = form.name.value;
  let joinname = JSON.stringify(name) +":"+ JSON.stringify(nameValue);
  
  const surname = form.surname.name ;
  const surnameValue = form.surname.value;
  let joinSurname = JSON.stringify(surname) +":"+ JSON.stringify(surnameValue);

  let join = JSON.stringify(joinname+joinSurname);

  let p = document.createElement('p');
  p.innerText = join;
  document.body.appendChild(p);
}


