require('dotenv').config();
require('dotenv-safe').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./api/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', router);

app.listen(process.env.PORT);
console.log(`App listening on ${process.env.PORT} `);
