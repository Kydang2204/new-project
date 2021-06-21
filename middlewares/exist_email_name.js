const User = require('../models/user');

const existEmailOrName = async (req, res, next) => {
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
};

module.exports = existEmailOrName;
