
let allBoldItems;
let p = document.querySelector('p');

p.addEventListener('mouseover',highlight)

p.addEventListener('mouseout',returnItemsToDefault)


highlight();
returnItemsToDefault();

function getBoldItems(){
  allBoldItems = document.getElementsByTagName('strong')
}

function highlight(){
  getBoldItems();
  for(let item of allBoldItems){
   item.style.color = 'blue';
  }
}

function returnItemsToDefault(){
  highlight();
  for(let item of allBoldItems){
   item.style.color = 'black';
  }
}
