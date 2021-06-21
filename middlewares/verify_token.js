const jwt = require('jsonwebtoken');

const hasToken = (req, res, next) => {
  if (!req.header('auth_token')) {
    return res.json({
      code: 1003,
    });
  }

  next();
};

const hasRightToken = (req, res, next) => {
  try {
    jwt.verify(req.header('auth_token'), process.env.JSONWEBTOKEN_PASSWORD);

    next();
  } catch (error) {
    res.json({
      code: 1004,
    });
  }
};

const verifyToken = [hasToken, hasRightToken];

module.exports = verifyToken;
