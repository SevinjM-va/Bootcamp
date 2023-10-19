const express = require('express');
const app = express();
const router = require('./routes/books');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/', router);


app.listen(3000, ()=>{
  console.log('worked');
});