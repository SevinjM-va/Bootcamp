
// let table = document.getElementById('sampleTable');

// let row = 2;
// let cell = 0;
// function insertRow(){
//   let createCell1 = document.createElement('td');
//   let createCell2 = document.createElement('td');
//   createCell1.textContent = 'Row 1 cell3'
//   createCell2.textContent = 'Row 1 cell3'
//   row++;
//   cell++;
//   let tr =  document.createElement('tr');
//   tr.appendChild(createCell1);
//   tr.appendChild(createCell2);
//   table.appendChild(tr);
//   console.log(tr);
// }


// let button =  document.querySelector('button');

// let color = ['red','green','blue','rose','yellow','brown','violet']

// button.addEventListener('click',changeStyle);
// button.addEventListener('mouseover',changeStyle);

// function changeStyle(e){

//   if (e.type === 'mouseover'){
//     e.target.style.backgroundColor = 'red';
//     e.target.style.border = 'none';
//     e.target.style.padding = '20px';
//   } else if (e.type === 'click'){
//       e.target.style.backgroundColor = 'blue';
//       e.target.style.border = 'none';
//       e.target.style.padding = '30px';
//   }
  
// }

let div = document.getElementsByTagName("btn");
let button = document.getElementById("jsstyle");

button.addEventListener('click',changes);
button.addEventListener('click',changes);
button.addEventListener('click',changes);

function changes(e){
  e.target.style.backgroundColor = 'red';
}




