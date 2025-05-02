const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  gender: String,
  location: String,
  rating: Number,
  consultationFee: Number,
  language: String,
  facility: String,
  modeOfConsult: String,
  qualification: String,
  profilePic: {
    type: String,
    default: "https://images.apollo247.in/doctors/a3d6f89d-8212-4988-bea0-54bf9f6db960-1742362433743.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2"
  }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
