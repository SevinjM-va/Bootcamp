const express = require('express');
const app = express();

app.get('/api/greetings',(req,res) => res.send('Hello and welcome!'));



app.listen(3000);