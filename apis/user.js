const express = require('express');
const User = require('../models/user');
const existEmailOrName = require('../middlewares/check_email_name');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  res.json(await User.find({}));
});

// Get one user
router.get('/:id', async (req, res) => {
  res.json(await User.findById({
    _id: req.params.id,
  }));
});

// Post a user
router.post('/', existEmailOrName, (req, res) => {
  User.create(req.body);

  res.json({
    code: 2001,
  });
});

// Update user
router.put('/:id', existEmailOrName, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);

  res.json({
    code: 2002,
  });
});

// Delete user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id, req.body);

  res.json({
    code: 2003,
  });
});

module.exports = router;
