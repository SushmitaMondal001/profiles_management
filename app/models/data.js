var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },

  age: {
    type: Number,
    min: 18,
    max: 150,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  location: {
    type: String
  },

  interest: {
    type: String
  }

})

module.exports = mongoose.model('profile',profileSchema);
