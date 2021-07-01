require('dotenvenc')('password');

require('dotenv').config();

require('dotenv-safe').config();

const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./api/user');
const mung = require('./middlewares/express_mung');
const verifyToken = require('./middlewares/verify_token');
const publicRouters = require('./api/login_register');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json());

app.use(mung);

app.use('/api/users', verifyToken, routers);

app.use('/api/public', publicRouters);

app.listen(process.env.PORT);

console.log(`App listening on ${process.env.PORT}`);

console.log('abc');

console.log('cde');
