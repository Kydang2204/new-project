const dotevn = require('dotenv');

dotevn.config();
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(process.env.PORT);
console.log('App listening on 2');
