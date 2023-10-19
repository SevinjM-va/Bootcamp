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

// !!! post etdikde id ni de nezere al objecte avto elave olunsun deye sqldeki kimi

// !!! req body ni yoxla 

// !!! her birinde eyni path varsa app de serverde birdefelik qeyd etmek daha uygun

module.exports = router;