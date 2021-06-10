const mongoose = require('./main');

mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('userModel', userSchema);

module.exports = User;
