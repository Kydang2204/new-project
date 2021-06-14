const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const result = await User.findOne({ email: req.body.email });

  if (result) {
    const checkPassword = await bcrypt.compare(req.body.password, result.password);

    if (checkPassword) {
      const token = jsonwebtoken.sign({
        id: result.id, name: result.name,
      }, `${process.env.JSONWEBTOKEN_PASSWORD}`, { expiresIn: `${process.env.JSONWEBTOKEN_EXPIRESIN}` });

      res.json({ data: token });
    } else {
      res.json({ error: 'Password wrong' });
    }
  } else {
    res.json({ error: 'You have to register first' });
  }
});

router.post('/register', async (req, res) => {
  const result = await User.findOne({ $or: [{ name: req.body.name }, { email: req.body.email }] });

  if (!result) {
    const salt = await bcrypt.genSalt(10);

    req.body.password = await bcrypt.hash(req.body.password, salt);

    User.create(req.body);

    res.json({ msg: 'You have successfully registered' });
  } else {
    res.json({ error: 'Your email or name have registered' });
  }
});

module.exports = router;
