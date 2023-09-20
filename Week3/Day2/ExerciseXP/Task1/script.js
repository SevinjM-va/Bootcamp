
// Ex 1
// 1. Using a DOM property, retrieve the h1 and console.log it.
let h1 =  document.querySelector('h1');
console.log(h1);

// 2.Using DOM methods, remove the last paragraph in the <article> tag.

let article = document.querySelector('article');
article.lastElementChild.remove();

// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector('h2');
h2.addEventListener('click', addStyle);
function addStyle(e){
  e.target.style.backgroundColor = 'red';
}

// 4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3');
h3.addEventListener('click', hideFunc);
function hideFunc(e){
  e.target.style.display = 'none';
};

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let btn = document.createElement('button');
btn.textContent ='Click on';


btn.addEventListener('click', changeBold);
let parag = document.querySelectorAll('p');
article.appendChild(btn);

function changeBold(){
  for(let bold of parag){
  bold.style.fontWeight = 'bold';
  console.log(bold);
}
}
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener('mouseover', changeFontsize);

function changeFontsize(e){

    let num = Math.floor(Math.random() * 100 + 1);
    num = num + 'px'
    console.log(num);
    e.target.style.fontSize = `${num}`;
}
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let sndParag = document.querySelectorAll('p');

sndParag[1].addEventListener('mouseout', hoverOut);

function hoverOut(e){
  e.target.style.backgroundColor = 'gray';
}
