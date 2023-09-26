

// Ex 1
let numm =(a,b)=> a * b;
console.log(numm(5,4));

// Ex2
const weight = (kq)=> {
  let totalgr = 0;
  function gram(){
    totalgr = kq * 1000 +'gr';
    return totalgr
  }
  return gram
};
console.log(weight(5)())


// Ex 3
const fortuneTeller = (numberchildren,partnerName,geographicLoc,jobTitle)=>{
  return (`"You will be a ${jobTitle} in ${geographicLoc}, and married to ${partnerName} with ${numberchildren} kids.`);
}
let total = fortuneTeller(2,"Ali ","Baku ","teacher ")
console.log(total);

let p = document.querySelector('p');
p.innerHTML = (total);



// Ex 4

let userNameFunc = (name)=> {

  let h1 = document.querySelector('h1');
  let img =  document.querySelector('img');
  if (name){
  h1.innerHTML = (name);
  img.style.visibility ='visible';
}
}
userNameFunc('Sarah');

console.log('=====================');

// Ex 5

let makeJuice = (juicesize)=>{

  let ingredients = [];

  function addIngredients (first, second,third){
    ingredients.push(first,second,third);

    let p =  (`The client wants a ${juicesize} juice, containing ${first} , ${second}, ${third}.`);
  
      function displayJuice (){
      let body = document.querySelector('body');
      let div = document.createElement('div');
      div.style.backgroundColor = 'green';
      div.style.height = '100px'
      div.style.weight = '100%';
      div.innerHTML = p;
      body.appendChild(div);
  }
    displayJuice();
    return p;
  }
  addIngredients('lemon','mint','cinnamon');
  addIngredients('strawberry','milk','sugar');
};
let juice = makeJuice('small');
console.log(juice);

