// Ex 2
// 1.Add a “light blue” background color and some padding to the <div>.
let divStyle = document.querySelector('div');
divStyle.style.backgroundColor = 'lightblue';
divStyle.style.padding ='20px';

// 2. Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
let removeFirstLi = document.querySelector('ul');
removeFirstLi.firstElementChild.remove();

// 3. Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
let addingStyleToSecondLi = document.querySelector('ul');
addingStyleToSecondLi.style.border = '3px solid black';

// 4.Change the font size of the whole body.
let bodyChange = document.querySelector('body');
bodyChange.style.fontSize = '30px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (divStyle.style.backgroundColor == 'lightblue' ){
  alert ('Hello x and y');
}