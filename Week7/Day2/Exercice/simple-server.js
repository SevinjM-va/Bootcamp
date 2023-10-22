
const http = require('http');

const simpleServer = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'application/json');
  // res.end('<h1>Hello,this is your server!</h1>')

  console.log('method', req.method)
  const json =
{
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
}
res.end(JSON.stringify(json));


});


simpleServer.listen(3000);