const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1sevinc2",
    database: "Actors",
    port: 5432,
  },
});
app.set("db", db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.listen(3000);

app.get("/posts", (req, res) => {
  db("actors")
    .select()
    .from("posts")
    .then((posts) => res.send(posts));
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postId = db(
    'actors'
  ) /* db return etmir deye variable menimsetmek unnecessary */
    .select('post_title', 'post_content')
    .from('posts')
    .where(
      'post_id',
      '=',
      id
    ) /*("post_id", id) vergulle bearberlik yazmadan da vermek olar */
    .then((item) => res.send(item));
});

app.post("/posts", (req, res) => {
  const body = req.body;
  // !!! req bodynin bos olma ya da uygun olmama ehtimalini yoxla 
  db("posts")
    // .returning(["post_id", "post_title", "post_content"])
    .insert({
      post_title: body.post_title,
      post_content: body.post_content
    })
    .then((actors) => res.send('hello'));
    // !!! gorulen ise uygun response gondermek daha uygun ya yeni update olunan objecti ya da process successfull kimi
});



// app.put("/posts/:id", async (req, res) => {
//   const { post_id } = req.params;

// !!! path i hansi ad altinda yazmisansa o ad altinda da istifade etmelisen id

//   const { post_title, post_content } = req.body;
//   db("actors");
//   await db.query(
//     "UPDATE posts SET post_title = $1, post_content = $2 WHERE post_id = $3",

//     [post_title, post_content, post_id]
//   );


// !!!bu query ile qarsilasmamisam diger option
// await knex("posts").where("id", id).update({ title, content });
// !!!

// });

// app.delete("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   await db.query("Delete from posts where id =$1", [id]);
// });
// !!!bu query ile qarsilasmamisam diger option
    // const deletedPost = await knex('posts').where('id', id).first();
    // !!!

    // !!! instructionda controller ve route strukturdan da istifade etmeyi isteyir