const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];

  
function displayCards(robotarr){
for (let item of robotarr){
 const html = `
 <div class="robot" id="first">
   <div class="img-container">
     <img class="firstImg" src="${item.image}">
   </div>
   <div class="descriprion">
     <h3>${item.name}</h3>
     <p>${item.email}</p>
   </div>
 </div>
`
const div = document.createElement('div');
div.classList.add('robot');
div.innerHTML = html;
document.getElementById('container').appendChild(div);

}
}

const search = (e)=>{
  console.log(e.target.value)  
  let found = robots.filter(robot => robot.name.includes(e.target.value));
  deletCards(found)
  displayCards(found)
}

const deletCards = (()=>{
  document.getElementById('container').innerHTML = '';
})
const input = document.querySelector('input');

let searchdiv = document.createElement('div');

displayCards(robots)
input.addEventListener('keyup', search);
