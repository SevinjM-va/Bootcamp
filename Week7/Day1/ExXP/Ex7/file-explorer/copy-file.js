const fs = require('fs');

fs.readFile('source.txt','utf-8',(err,data)=>{
  if(err){
    console.log(err)
  } 
  fs.writeFile('destination.txt',data,'utf-8',(err)=>{
    if(err){
      console.log(err);
    } else{
      console.log('completed');
    }
  })
});

