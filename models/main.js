const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGDB_USER}:${process.env.MONGDB_PASSWORD}@${process.env.MONGDB_HOST}?retryWrites=true&w=majority`, {
  useNewUrlParser: true, useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

console.log('Successfully connected to MongoDB at: mongodb');

module.exports = mongoose;

