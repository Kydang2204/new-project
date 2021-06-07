const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://data:data123@cluster0.xbdzw.mongodb.net/datas?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Successfully connected to MongoDB at: mongodb');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;
