// Ex 1
// 1. Retrieve the div and console.log it
console.log(document.getElementById('container'))

// 2. Change the name “Pete” to “Richard”.
let changeElement = document.querySelector('.list').children[1].textContent = 'Richard';
console.log(changeElement);


// 3. Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
let delElement = document.querySelectorAll('.list')[1].children[1].remove();
console.log(delElement);


// 4. Change each first name of the two <ul>'s to your name. (Hint : use a loop)
let myName = document.querySelectorAll('.list');
console.log(myName);
for(let item of myName){
 item.firstElementChild.textContent = 'Sevinj';
}

// 1. Add a class called student_list to both of the <ul>'s.

let addingClass = document.querySelectorAll('.list');
for (let item of addingClass){
  item.classList.add('student_list');
}

// 2. Add the classes university and attendance to the first <ul>.

let addingClassOnlyFirstEl = document.querySelectorAll('.list')[0];
console.log(addingClassOnlyFirstEl.classList.add('university','attendance'));
