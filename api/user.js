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
  const result = await User.findOne({$or:[{"name": user.name}, { "email": user.email }]});
  if (!result) {
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password,salt);
    user.save();
    res.json(1);
  } else res.json(-1);
});

// api login
router.post('/login', async (req, res) => {
  let user = new User(req.body);
  let result = await User.findOne({ email: user.email });
  if (result) {
    const checkPassword = await bcrypt.compare(user.password,result.password);
    if (checkPassword) {
      const token = await jsonwebtoken.sign({id:result.id,name:result.name}, `${process.env.JSONWEBTOKE_PASSWORD}`,{expiresIn: 60000 });
      res.header("auth_token", token).json({
        error: null,
        data:token})
    } else {
      (
        res.json(-1)
      );
    }
  } else res.json(-2);
});

module.exports = router;
