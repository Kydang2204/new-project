require('dotenv').config();

require('dotenv-safe').config();

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./apis/user');
const mung = require('./middlewares/express_mung');
const verifyToken = require('./middlewares/verify_user');
const router2 = require('./apis/login_register');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json());

app.use(mung);

app.use('/api/users', verifyToken, router);

app.use('/api/public', router2);

app.listen(process.env.PORT);

console.log(`App listening on ${process.env.PORT}`);
