import fs from "fs";

function read (filepath){
return fs.readFile (filepath,'utf-8',(err, data)=>{
  if(err){
    console.log(err)
  } console.log(data)
});
}

function write(filepath){
return fs.writeFile(filepath, 'Byeeee World!!',(err)=>{
  if(err){
    console.log(err)
  } else {
    console.log('File written')
  }
})
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}
// !!!

export {
  read, write
}
