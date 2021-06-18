const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

async function checkEmail(req, res, next) {
  if (!await User.findOne({
    email: req.body.email,
  })) {
    return res.json({
      code: 1000,
    });
  }

  next();

  return null;
}

async function checkPassword(req, res) {
  const result = await User.findOne({
    email: req.body.email,
  });

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

    return null;
  }
}

router.post('/login', checkEmail, checkPassword);

async function existEmailOrName(req, res, next) {
  if (await User.findOne({
    $or: [{
      name: req.body.name,
    }, {
      email: req.body.email,
    }],
  })) {
    return res.json({
      code: 1002,
    });
  }

  next();

  return null;
}

router.post('/register', existEmailOrName, async (req, res) => {
  User.create(req.body);

  res.json({
    code: 2000,
  });
});

module.exports = router;
