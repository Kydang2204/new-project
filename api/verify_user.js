const jwt = require('jsonwebtoken');
// middleware to validate token
const verifyToken = (req, res, next) => {
  const token = req.header('auth_token');
  if (!token) {
    res.status(401).json({
      error: 'Access denied',
    });
  }
  try {
    const verified = jwt.verify(token, process.env.JSONWEBTOKEN_PASSWORD);
    console.log(verified);
    req.user = verified;
    next();
  } catch {
    res.status(400).json({
      error: 'Token is not valid',
    });
  }
};
module.exports = verifyToken;
