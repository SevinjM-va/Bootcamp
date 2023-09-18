



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

// let num = Number(prompt('Enter your number'));
// goturulenSay=1 // global variable yaradiriq her yerden istifade edek deye cixmaga 1 den baslayiriq deye 1 veririk
// while (num > 0){
//   let song = funkBottles(num,goturulenSay); /* functiona argument kimi otururk hemin variableni */
//   console.log(song);
//   num = num - 1;
//   goturulenSay++ /* her defe 1 vahid artirirq cunki her defe 1 eded daha cox gotururuk */
// }
// function funkBottles(num, goturulenSay ){ /* burada functiona oturduyumuz parametrdir. placeholder kimidir global variabler ile eyni deyil */
// let numberOfBottles =
// `${num} bottles of beer on the wall
// ${num} bottles of beer
// Take ${goturulenSay} down, pass it around
// ${num - goturulenSay} bottles of beer on the wall`
// return numberOfBottles
// }
// /*Take ${goturulenSay} down, pass it around -- bunu her defe ne qeder goturduyumuz gostermek ucun yaziriq */
// /* num - goturulenSay-- her defe goturduyumuz qeder olani hemin loop turundaki num dan cixiriq */

