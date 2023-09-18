
const allBooks = [
  {
    title: 'Murder1',
    author: 'K.M.Karl',
    image: 'a url',
    alreadyRead: 'which is a boolean (true or false)'
  }
,
  {
    title: 'Harry Potter',
    author: 'JKRolling',
    image: 'a url',
    alreadyRead: 'which is a boolean (true or false)'
  }
]

const addInsideDiv = document.createElement('Table');

addInsideDiv.innerHTML = `
  <thead>
    <tr>
      <th> Book list </th>
    </tr>
  </thead>
`
console.log(addInsideDiv);
let htmlDiv = document.querySelector('.listBooks');
htmlDiv.appendChild(addInsideDiv);


htmlDiv.appendChild(allBooks);