const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://data:${process.env.MONGDB_PASSWORD}@cluster0.xbdzw.mongodb.net/datas?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true });

console.log('Successfully connected to MongoDB at: mongodb');
module.exports = mongoose;
