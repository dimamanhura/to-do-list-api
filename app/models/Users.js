const mongoose = require('mongoose');

const schema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  first_name: {
    type: String,
    maxlength: 30,
    required: true
  },
  last_name: {
    type: String,
    maxlength: 30,
    required: true
  },
  avatar: { type: String },
  password: {
    type: String,
    minlength: 6
  }
});

module.exports = mongoose.model('Users', schema);
