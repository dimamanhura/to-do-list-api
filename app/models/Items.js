const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

module.exports = mongoose.model('Items', schema);
