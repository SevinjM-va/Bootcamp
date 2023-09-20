

let input = document.getElementById('onlyText');


function choiceLetter(event){
  if (
    String.fromCharCode(event.keyCode) !== '%' && 
    (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key))
  ){
    console.log(input);
}
}
