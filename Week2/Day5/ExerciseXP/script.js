

// Part 1

function playTheGame(){
  let game = confirm("Would you like to start?");

  if (!game){
    alert('No problem, Goodbye');
    return
  } else if (game) {

    let question = prompt('Enter a number between 0 and 10!');
    // !!! window global object oldugu ucun ixtisar etsek da olar


     
    if (!isonlyNumbers(question)){
      alert('Sorry Not a number, Goodbye');
      return
    } else if (!num0and10(Number(question))){
      /* !!! function adlarini fel kimi qoymaq daha anlasilir edir yeni adinda ne ne etdiyini bilinsin qisaca*/
      alert('Sorry it’s not a good number, Goodbye');
      return;
    } else {
      let computerNumber = randomNumber();
      console.log(`ComputerNumber is: ${computerNumber}`);
      compareNumbers(question, computerNumber);
    }
      
  }
}

function isonlyNumbers(str){
  const regex = new RegExp (/^[0-9]*$/);
  return regex.test(str);
}

function num0and10(number){
  return number >=0 && number <= 10;
}

function randomNumber(){
  return Math.floor(Math.random()*11);
}
playTheGame();
// Part 2


function compareNumbers(userNumber,computerNumber){

  for( let i = 0; i < 3; i++){

  if (userNumber == computerNumber){
    alert('WINNER');
    return;
  } else if (userNumber > computerNumber) {
    let newNumber = prompt('Enter new number')
  } else if (userNumber < computerNumber){
    alert('Your number is smaller then the computer’s, guess again');
    let pr = prompt('Enter new number again')
  }
  } 
}
// compareNumbers(7, 8);

