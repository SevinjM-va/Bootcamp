const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const array = [
  {
    id: 2525,
    title: 'hi',
    content: 'djwkklwjo ojdoqwjdqowj oqjweoqwejqowjeq jqowejqow',
  },
  {
    id: 7898,
    title: 'good-bye',
    content: 'djwkklwjo ojdoqwjdqowj oqjweoqwejqowjeq jqowejqow',
  },
  {
    id: 6666,
    title: 'hello',
    content: 'djwkklwjo ojdoqwjdqowj oqjweoqwejqowjeq jqowejqow',
  },
];

app.get('/posts', (req, res) => {
  res.json(array);
});

app.get('/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const comp = array.find(
    (el) => el.id === id
  ); /* postman type da problem olarsa == */

  res.json(comp);
});

app.post('/posts', (req, res) => {
  const body = req.body;
  //  !!! req body nin olub olmamasini if statementle yoxla
  array.push(body);
  res.json(body);
});

app.put('/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  // !!! object id meselesini nezere al yeni bir object yaradib hazir id ni array length mentiqi ile isleye bilersen
  //  !!! req body nin olub olmamasini if statementle yoxla
  const index = array.findIndex((item) => {
    return item.id == id;
  });
  array[index] = body;
  res.status(200).json(body);
});

app.delete('/posts/:id', (req, res) => {
  const findId = posts.params.id;
  const comp = array.findIndex(
    (item) => item.id === findId
  ); /* postman type da problem olarsa == */
  // !!! silmek ucun splice metodundan istifade et
  res.json(comp);
}); //Burada error verir. Niye bilmirem.
app.listen(3000);
