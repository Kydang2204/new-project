const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');
// api login
router.post('/login', async (req, res) => {
  const user = new User(req.body);
  const result = await User.findOne({
    email: user.email,
  });
  if (result) {
    const checkPassword = await bcrypt.compare(user.password, result.password);
    if (checkPassword) {
      const token = await jsonwebtoken.sign({
        id: result.id, name: result.name,
      }, `${process.env.JSONWEBTOKEN_PASSWORD}`, {
        expiresIn: 60000,
      });
      res.header('auth_token', token).json({
        error: null,
        data: token,
      });
    } else {
      res.json(-1);
    }
  } else res.json(-2);
});
// api register
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  const result = await User.findOne({
    $or: [{
      name: user.name,
    }, {
      email: user.email,
    }],
  });
  if (!result) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    user.save();
    res.json(1);
  } else res.json(-1);
});
module.exports = router;
