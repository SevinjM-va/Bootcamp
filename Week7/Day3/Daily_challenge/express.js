const express = require('express');
const app = express();
const router = require('./question.js');


// !!! bodyparser i burada cagir ki butun route lara aid olsun


app.use('/quiz',router);


app.listen(3000,()=>{
  console.log('worked')});