

const express = require('express');
const app =  express();
const posts = require('./data');

app.get('/api/posts',(req,res)=> res.json(posts));


  // res.status(404)).send('Post not found')

app.listen(5000);