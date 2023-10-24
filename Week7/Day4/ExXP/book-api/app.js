const express = require ('express');
const app = express();

const { Client } = require('pg');

const client = new Client({
        host: '127.0.0.1',
        user: 'postgres',
        password: '1sevinc2',
        database: 'Actors',
        port: 5432
});



const execute =  async (query) => {
 try {
  await client.connect();
  await client.query(query);
  return true;
 } catch (error) {
  console.error(error.stack);
  return false;
 } finally {
  await client.end();
 }
};

const text = `CREATE TABLE IF NOT EXISTS "NEW_BOOKS" (
  "id" serial,
  "title" varchar(100) not null,
  "author" varchar(100) not null
);`;

execute(text).then(result=> {
  if (result) {
    console.log('Table created')
  }
});
app.listen(5000);

// !!! knex den istifade olunmayib