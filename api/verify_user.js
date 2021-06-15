const jwt = require('jsonwebtoken');

function hasToken(req, res, next) {
  if (!req.header('auth_token')) {
    res.status(401).json({ error: 'Access denied' });
  }

  next();
}

function hasRightToken(req, res, next) {
  jwt.verify(req.header('auth_token'), process.env.JSONWEBTOKEN_PASSWORD);

  try {
    next();
  } catch {
    res.status(400).json({ error: 'Token is not valid' });
  }
}

const verifyToken = [hasToken, hasRightToken];

module.exports = verifyToken;
