


const makeAllCaps = (arr)=>{
  return new Promise ((resolve, reject)=>{
    const check = arr.every(x => typeof(x) === 'string');
      if (check){
       const upperCase = arr.map(x => x.toUpperCase());
       resolve (upperCase);
      } else {
        reject('They are not string');
      }
   })
  }

const sortWords = (arr) =>{
  return new Promise ((resolve, reject)=>{
    if (arr.length > 4){
      resolve (arr.sort());
    } else{
      reject('The words have not uppercased')
    }
  })
}


makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then(arr => sortWords(arr))
.then(result => console.log(result))
.catch(error => console.log(error));

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const convert = JSON.parse(morse);

const toJs = () => {
  return new Promise((resolve, reject) => {
    if (Object.keys(convert) === 0) {
      reject('The Object is empty!');
    } else {
      resolve(convert);
    }
  });
};


const toMorse = (morseJS) => {
  console.log('🚀 ~ file: script.js:89 ~ toMorse ~ morseJS:', morseJS);
  return new Promise((resolve, reject) => {
    let word = 'food';
    let letters = word.trim().split('');
    console.log(letters);

    let morseArr = letters.map((val) => {
    if(morseJS[val]){
      return morseJS[val];
    }
    });
    

    resolve(morseArr);

    // for (let lett of letter) {
    //   let check = Object.keys(morse).find((item) => item.includes(lett));

    //   if (check) {
    //     const keys = Object.keys(morse);
    //     const filterKey = keys.filter((item) => item.includes([check]));
    //     const morseLetter = morse[filterKey];
    //     console.log([morseLetter].splice(' '));

    //     let p = document.createElement('p');
    //     p.appendChild(morseLetter);
    //     document.querySelector('body').appendChild(p);
    // resolve([morseLetter].splice(' '));
    // } else {
    //   reject('The item is not exist in object');
    // }
    // }
  });
};

// toJs().then((result) => console.log(result));

// toMorse('good').then((result) => console.log(result));

toJs()
  .then((result) => toMorse(result))
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
