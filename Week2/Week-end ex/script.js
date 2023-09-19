
// // Ex 2

// function numbers() {
//   for (var i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();

// Ex 3

let myAccount = 2000;

let amountOfVat = 0;

let finish = calcu();
console.log('Thanks for operation');


function calcu (){
  let qaliq = alert(`You have ${myAccount} in your balance`)

  let choise = confirm('Have you an expence?')
  if (choise){
    let expences = prompt('Enter your expences');
    if (expences <= myAccount){
      amountOfVat = myAccount - expences;
      myAccount = amountOfVat;
      alert (`You have ${myAccount} in your balance`)
      return;
    } else {
      alert (`You have not enough money  in your balance`)
    } 
  } else if (!choise){
    choise = confirm('Have you a revenue?');
    if (choise){
      let revenu = Number( prompt('Enter your Revenue'));
      myAccount = myAccount + revenu;
      alert (`You have ${myAccount} in your balance now`);
      return;
    } else {
      choise = alert(`You haven't done any operation. Thanks`)
    }

  }
  
}
