const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  res.send('Homepage');
});

router.get('/about',(req,res)=>{
  res.send('about page')
});

module.exports =  router;

// !!! bir projecting icerisinde yeni node modules a ehtiyac yoxdur