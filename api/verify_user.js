const jwt = require('jsonwebtoken');

function hasToken(req, res, next) {
  if (!req.header('auth_token')) {
    return res.status(401).json({ error: 'Access denied' });
  }

  next();

  return null;
}

function hasRightToken(req, res, next) {
  try {
    jwt.verify(req.header('auth_token'), process.env.JSONWEBTOKEN_PASSWORD);

    next();
  } catch (error) {
    res.json(error);
  }
}

const verifyToken = [hasToken, hasRightToken];

module.exports = verifyToken;
