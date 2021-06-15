const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

async function checkEmail(req, res, next) {
  if (!await User.findOne({ email: req.body.email })) {
    return res.json(1000);
  }

  next();

  return null;
}

async function checkPassword(req, res) {
  const result = await User.findOne({ email: req.body.email });

  if (!await bcrypt.compare(req.body.password, result.password)) {
    return res.json(1001);
  }

  res.json({ data: jsonwebtoken.sign({
    id: result.id, name: result.name,
  }, `${process.env.JSONWEBTOKEN_PASSWORD}`, { expiresIn: `${process.env.JSONWEBTOKEN_EXPIRESIN}` }) });

  return null;
}

router.post('/login', checkEmail, checkPassword);

async function existEmailOrName(req, res, next) {
  if (await User.findOne({ $or: [{ name: req.body.name }, { email: req.body.email }] })) {
    return res.json(1002);
  }

  next();

  return null;
}

router.post('/register', existEmailOrName, async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

  User.create(req.body);

  res.json(2000);
});

module.exports = router;
