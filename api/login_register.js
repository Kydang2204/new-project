const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

async function checkEmail(req, res, next) {
  if (!await User.findOne({ email: req.body.email })) {
    res.json({ error: 'You have to register first' });
  }

  next();
}

async function checkPassword(req, res) {
  const result = await User.findOne({ email: req.body.email });

  if (!await bcrypt.compare(req.body.password, result.password)) {
    res.json({ error: 'Password wrong' });
  }

  res.json({ data: jsonwebtoken.sign({
    id: result.id, name: result.name,
  }, `${process.env.JSONWEBTOKEN_PASSWORD}`, { expiresIn: `${process.env.JSONWEBTOKEN_EXPIRESIN}` }) });
}

router.post('/login', checkEmail, checkPassword);

async function existEmailOrName(req, res, next) {
  if (await User.findOne({ $or: [{ name: req.body.name }, { email: req.body.email }] })) {
    return res.json({ error: 'Your email or name have registered' });
  }

  next();
}

router.post('/register', existEmailOrName, async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

  User.create(req.body);

  return res.json({ msg: 'You have successfully registered' });
});

module.exports = router;
