


const arr = [{
  id: 0,
  author: 'Oscar Wilde',
  quote: 'Be yourself; everyone else is already taken.'
},
{
  id: 1,
  author: 'Albert Einstein',
  quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
},
{
  id: 2,
  author: 'Frank Zappa',
  quote: 'So many books, so little time'
},
{
  id: 3,
  author: 'Marcus Tullius Cicero',
  quote: 'A room without books is like a body without a soul.'
},
{
  id: 4,
  author: 'Marcus Tullius Cicero',
  quote: 'A room without books is like a body without a soul.'
},
{
  id: 5,
  author: 'Bernard M. Baruch',
  quote: 'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.'
}
]

const btn = document.getElementById('btn');
const parag = document.querySelector('#quote');
const paragauthor = document.querySelector('#author');

const randomNum = ()=>{

  const check = 0;
  const num = Math.floor(Math.random() * (6 - 0)+ 0); 
  if(num !== check){
    quote(num);
    check += num;
  } else {
    num++;
  }
}

function quote(num){
  const append = parag.textContent = arr[num].quote;
  const appendauthor = paragauthor.textContent = arr[num].author;
  console.log(append);
  console.log(appendauthor);
}

btn.addEventListener('click', randomNum);