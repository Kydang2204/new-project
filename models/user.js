const mongoose = require('./main');

mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema({
  name: {
    type: String, },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  });

const User = mongoose.model('userModel', userSchema);

module.exports = User;
