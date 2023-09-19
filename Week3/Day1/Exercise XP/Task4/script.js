

// !!!Anlamadıqlarıma videodan baxıb öyrəndim sonra yazdım. Çünki çox şeyi bilmirdim bu tapşırıqda.
// !!! elave materiallardan her zaman istifade ede bilersiniz, Esa odu tam aydin olsun yazdiginiz kodu))
const allBooks = []
  const book1 = {
    title: 'Murder1',
    author: 'K.M.Karl',
    image: 'a url',
    alreadyRead: 'true'
  }
  const book2 = {
    title: 'Harry Potter',
    author: 'JKRolling',
    image: 'a url',
    alreadyRead: 'true'
  }

  allBooks.push(book1,book2); /* !!! birbasa array icinde de yaza bilersen */
  let space = '';

  for (let book of allBooks){

    const rowTable = `
    <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.image}</td>
    <td>${book.alreadyRead}</td>
  </tr>`
  space = space + rowTable;
  console.log(space);}

const addInsideDiv = document.createElement('Table');

addInsideDiv.innerHTML = `
  <thead>
    <tr>
      <th>My first book</th>
    </tr>
  </thead>
  <tbody>
    ${space}
</tbody>
`
console.log(addInsideDiv);

let htmlDiv = document.querySelector('.listBooks');
console.log('htmlDiv:', htmlDiv)
htmlDiv?.appendChild(addInsideDiv);
addInsideDiv.appendChild(allBooks)


