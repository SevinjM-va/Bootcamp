
// !!! Bu cümləni heç anlamadım. Arqument olmadan sözləri haradan götürməlidir?
// Onda funksiyanın içərisində olmalıdı sözlər?
// When the function is called without any arguments return a string where all words have been merged into a sentence.



function mergeWords(string) {
  return function(nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + ' ' + nextString);
    }
  }
  
 }

 console.log(mergeWords('Hello')());
 console.log(mergeWords('There')());
 console.log(mergeWords('is')());
 console.log(mergeWords('no')());
 console.log(mergeWords('spoon.')());
