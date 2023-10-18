const express = require('express');
const router = express.Router();

const todos = [];

router.get('/todos',(req,res)=>{
  res.json(todos);
});

router.post('/todos',(req,res)=>{
  const body = req.body;
  todos.push(body);
  res.json(body)
});


router.put('/todos/:id',(req,res)=>{
  const id = req.params.id;
  const body = req.body;
  const index = todos.findIndex(item => item.id === id);
  
  if (index !== -1){
    todos[index] = body;
    res.json(body);
  } else {
    res.status(404).send('Not found')
  }
})
module.exports = router;