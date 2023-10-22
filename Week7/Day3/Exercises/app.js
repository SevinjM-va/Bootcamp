
const express = require('express');
const app = express();

const indexRouter = require('./routes/index.js');

app.use('/',indexRouter);

app.listen(3000);
