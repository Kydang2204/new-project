const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  res.json(await User.find({}));
});

// Get one user
router.get('/:id', async (req, res) => {
  res.json(await User.findById({ _id: req.params.id }));
});

// Post a user
router.post('/', async (req, res) => {
  User.create(req.body);

  res.json({ msg: 'Add user successfully' });
});

// Update user
router.put('/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);

  res.json({ msg: 'Updated successfully.' });
});

// Delete user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id, req.body);

  res.json({ msg: 'Deleted sucessfully' });
});

module.exports = router;
