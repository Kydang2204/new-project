require('dotenv').config();
require('dotenv-safe').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./api/user');
const mung = require('./express_mung');
const verifyToken = require('./api/verify_user');
const router2 = require('./api/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(mung);
app.use('/api/users', verifyToken, router);
app.use('/api/public', router2);
app.listen(process.env.PORT);
console.log(`App listening on ${process.env.PORT} `);
