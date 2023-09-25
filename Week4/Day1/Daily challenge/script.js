const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
 ];

//  !!!Burada usernames-ləri push edirəm arraya alınmır
// 
// 

 let arr = [];
 let username;
gameInfo.forEach((el)=>{
  username = [el.username+'!'];
  arr.push(username);
  // console.log(username);
  let winners = el.score;
  console.log(winners);
})
