const jwt = require('jsonwebtoken');

function hasToken(req, res, next) {
  if (!req.header('auth_token')) {
    return res.json({
      code: 1003,
    });
  }

  next();

  return null;
}

function hasRightToken(req, res, next) {
  try {
    jwt.verify(req.header('auth_token'), process.env.JSONWEBTOKEN_PASSWORD);

    next();
  } catch (error) {
    res.json({
      code: 1004,
    });
  }
}

const verifyToken = [hasToken, hasRightToken];

module.exports = verifyToken;
