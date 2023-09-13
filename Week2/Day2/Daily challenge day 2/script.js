

let sentence = 'My schoolbag is not that bad,i like it.';

let wordNot = [
  sentence.search('not')
];

let wordBad = [
  sentence.search('bad')
];

let firstpart = sentence.substring(0,16);
let secondpart = sentence.substring(28,39);

console.log(wordNot);
console.log(wordBad);

if (wordNot < wordBad ){
  console.log(`${firstpart} "good" ${secondpart}`);
} else {
  console.log(sentence);
}