
const express = require('express');
const app =  express();

const date = new Date;


app.use('/about',(req,res,next)=>{
  console.log('Date:'+ date);
  next();
})
app.get('/home',(req,res)=>{
  res.send('Date:');
})
app.get('/about',(req,res)=>{
  res.send('Date2:');
})

app.listen(5000,()=>{ console.log('worked')});