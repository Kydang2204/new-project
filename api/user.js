const express = require('express');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Get one user
router.get('/:id', async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  res.json(user);
});

// Post a user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    user.save();
    res.json('Add user successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update user
router.put('/:id', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json('Data to update can not be empty!');
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body,
      { useFindAndModify: false });
    if (!user) return res.status(404).json('Cannot update .id  was not found!');
    return res.json('updated successfully.');
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id, req.body);
    if (!user) res.status(404).send('No user found');
    else res.json('Deleted sucessfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

// api register
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  const result = await User.findOne({ name: user.name } || { email: user.email });
  if (!result) {
    user.password = bcrypt.hashSync(req.body.password, 10);
    user.save();
    res.json(1);
  } else res.json(-1);
});

// api login
router.post('/login', async (req, res) => {
  const user = new User(req.body);
  const result = await User.findOne({ email: user.email });
  if (result) {
    const checkPassword = bcrypt.compareSync(user.password, result.password);
    if (checkPassword) {
      const token = jsonwebtoken.sign({ id: user.id, email: user.email }, `${process.env.JSONWEBTOKE_PASSWORD}`);
      res.json({ code: 1, token });
    } else {
      (
        res.json(-1)
      );
    }
  } else res.json(-2);
});

module.exports = router;
