const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');
const existEmailOrName = require('../middlewares/check_email_name');

const router = express.Router();

router.post('/login', async (req, res) => {
  const result = await User.findOne({
    email: req.body.email,
  });

  // Check email
  if (!result) {
    return res.json({
      code: 1000,
    });
  }

  // Check password
  try {
    const matchedValue = await result.verifyPassword(req.body.password);

    if (matchedValue) {
      return res.json({
        data: jsonwebtoken.sign({
          id: result.id, name: result.name,
        }, `${process.env.JSONWEBTOKEN_PASSWORD}`, {
          expiresIn: `${process.env.JSONWEBTOKEN_EXPIRESIN}`,
        }),
      });
    }

    return res.json({
      code: 1001,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post('/register', existEmailOrName, async (req, res) => {
  User.create(req.body);

  res.json({
    code: 2000,
  });
});

module.exports = router;
