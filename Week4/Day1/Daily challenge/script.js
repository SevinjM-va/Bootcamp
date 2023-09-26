const gameInfo = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
];

//  !!!Burada usernames-ləri push edirəm arraya alınmır
//
//

let arr = [];
let username;
let winners = [];
gameInfo.forEach((el) => {
  username = el.username + '!'; /* array syntaxina ehtiyac yox idi */
  arr.push(username);
  console.log(
    arr
  ); /* yeqinki burda arr yerine username i console etdiyin ucun qarisib netice duzgun idi */

  // !!! task 2
  if (el.score > 5) {
    winners.push(el.username);
  }
  
});
console.log(winners);
