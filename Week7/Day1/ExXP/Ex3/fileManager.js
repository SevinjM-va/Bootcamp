const fs = require('fs');

// fs.readFile ("Hello World.txt" ,"utf8",(err, data)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log('Hello World')
//   }
// });
// fs.writeFile('Bye World.txt', content,(err)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log('File written')
//   }
// })

// !!! func icinde olub onu export etmelisen ki parameter qebul ede bilsin
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}
// !!!

module.exports = { readFile, writeFile };
