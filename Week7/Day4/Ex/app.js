const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1sevinc2',
        database: 'Actors',
        port: 5432
    }
});

app.set("db", db);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', (req, res) => {
  db('actors')

      .select().from('users')
      .then(actors =>
          res.send(actors)
      )
})