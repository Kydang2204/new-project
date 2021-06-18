const mongoose = require('./main');

mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

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

const User = mongoose.model('userModel', userSchema);

module.exports = User;
