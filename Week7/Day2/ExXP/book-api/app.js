
const express = require('express');
const app = express();


const books = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    publishedYear: 1999
  },
  {
    id: 2,
    title: 'Murder',
    author: 'M.K. Anderson',
    publishedYear: 2010
  },
  {
    id: 3,
    title: 'Alice',
    author: 'K.K.John',
    publishedYear: 2022
  },
  {
    id: 4,
    title: 'My Mom',
    author: 'L.K.Sarah',
    publishedYear: 1990
  }
]


app.get('/api/books',(req,res)=>{
  res.json(books)
})
get.post('/api/books',(req,res)=>{
  const body = req.body;
  books.push(body);
  res.status(201).send('work');
});

app.get('/api/books/:bookId',(req,res)=>{
  const id = parseInt(req.params.id);
  const comp = books.find(el=>el.id === id);
  res.send(comp)
}); //Bu kodda error verir ve daxil edilmis parametri NaN kimi verir;




app.listen(5000);
