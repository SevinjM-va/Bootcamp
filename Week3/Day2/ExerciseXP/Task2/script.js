

// Ex 2
// 1. Retrieve the form and console.log it.
// let form = document.getElementsByTagName('form');
// console.log(form);

// // 2.Retrieve the inputs by their id and console.log them.
// let nameInput = document.querySelector('[name=firstname]').value;
// console.log(nameInput);

// 4. When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

let submit = document.getElementById('submit');



submit.addEventListener('click', saveDate)


function saveDate(event){
  let firstname = document.querySelector('[name=firstname]').value;
  console.log(firstname)
  const lastname = document.querySelector('[name=lastname]').value;
  event.preventDefault();
  console.log(lastname);
  if (firstname === '' || lastname === ''){
    alert('Enter your firstname or lastname,please!!!');
  } else {
    let ul = document.querySelector('.usersAnswer');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    li1.innerText = (firstname);
    li2.innerText = (lastname);
    ul.append(li1, li2);
    
  }
}

