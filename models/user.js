const mongoose = require('./main');

const userSchema = new mongoose.Schema({
  name: {
    type: String, required: true,
  },
  email: {
    type: String, required: true,
  },
});

userSchema.plugin(require('mongoose-bcrypt'), {
  rounds: 10,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
