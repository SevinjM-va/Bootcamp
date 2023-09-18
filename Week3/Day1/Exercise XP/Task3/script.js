
// Ex 3
// 2.  Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let divChange = document.querySelector('div');
divChange.setAttribute('id', 'socialNetworkNavigation');

// 3. We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

let newLi = document.createElement('li');
let newText = document.createTextNode('Logout');
newLi.appendChild(newText);

let ul = divChange.firstElementChild;
ul.appendChild(newLi);

// 4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


let displayFirstAndLastLi = document.querySelector('ul');
console.log(displayFirstAndLastLi.firstElementChild.textContent);
console.log(displayFirstAndLastLi.lastElementChild.textContent);