const fs = require('fs');

const path = './';

fs.readdir(path,(err,data)=>{
  if(err){
    console.log(err);
  } else {
    console.log(data)
  }
})