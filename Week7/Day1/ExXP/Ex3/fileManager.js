
const fs = require("fs");

fs.readFile ("Hello World.txt" ,"utf8",(err, data)=>{
  if(err){
    console.log(err)
  } else {
    console.log('Hello World')
  }
});
fs.writeFile('Bye World.txt', content,(err)=>{
  if(err){
    console.log(err)
  } else {
    console.log('File written')
  }
})

module.exports = {readFile,  writeFile};



