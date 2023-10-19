const express = require('express');
const app = express();
const fetchPosts = require('./dataService');



app.get('/',(req,res)=>{
  res.json(fetchPosts)
})

// !!! solution
app.get('/', async (req, res) => {
  try {
    const posts = await fetchPosts.fetchPosts(); /* file icerisinden bize lazim olani gotururuk */
    
    res.json(posts);
    console.log('Data retrieved and sent as response.');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal server error');
  }
});
// !!!
app.listen(5000);