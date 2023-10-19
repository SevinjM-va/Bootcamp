const express = require('express');
const router = express.Router();

const books = [];


router.get('/books',(req,res)=>{
  res.json(books);
});

router.post('/books',(req,res)=>{
  const body = req.body;
  books.push(body);
  res.json(body)
});

router.put('/books/:id',(req,res)=>{
  const id = req.params.id;
  const body = req.body;
  const index = books.findIndex((item)=>{
   return item.id == id;
  });
   console.log(index)
  if (index === -1) {
    res.status(404).send('Not found')
  }
    books[index] = body;
    console.log(books);
    res.json(body);
})


module.exports = router;