const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  time: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
