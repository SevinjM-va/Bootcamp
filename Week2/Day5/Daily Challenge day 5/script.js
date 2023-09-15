



let num = Number(prompt('Enter your number'));


while (num > 0){
  let song = funkBottles(num);
  console.log(song);
  num = num - 1;
}

function funkBottles(num ){

let numberOfBottles = `${num} bottles of beer on the wall
${num} bottles of beer
Take 1 down, pass it around
${num - 1} bottles of beer on the wall`
return numberOfBottles
}


