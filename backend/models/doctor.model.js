const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  gender: String,
  location: String,
  rating: Number,
  consultationFee: Number
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
