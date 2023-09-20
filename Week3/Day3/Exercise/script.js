

let time = setInterval(sales, 5000);
let div = document.querySelector('div');

function sales(){
  document.querySelector('div').innerHTML = `The sales end in 10min!`;
}

i = 10;
let timer = setInterval(showTime, 1000);

function showTime(){
  if(i > 0){
    i--;
   div.innerText = `The sales end in ${i}min!`
  } else {
    clearInterval();
    div.innerText = `You lost!`;
  }
}

