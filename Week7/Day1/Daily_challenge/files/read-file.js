
const fs = require('fs');

function read (){
fs.readFile('file-data.txt', 'utf8',(err,data)=>{
  if (err){
    console.log(err)
  } else{
    console.log(data)
  }
})};

module.exports = read;