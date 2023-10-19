const express = require('express');
const app = express();
const fetchPosts = require('./dataService');



app.get('/',(req,res)=>{
  res.json(fetchPosts)
})

app.listen(5000);