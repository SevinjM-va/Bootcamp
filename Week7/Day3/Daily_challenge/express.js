const express = require('express');
const app = express();
const router = require('./question.js');





app.use('/quiz',router);


app.listen(3000,()=>{
  console.log('worked')});