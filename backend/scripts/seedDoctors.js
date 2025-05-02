const mongoose = require('mongoose');
const Doctor = require('../models/doctor.model'); // adjust path as needed

mongoose.connect('mongodb+srv://user_internship_assignments_pass_internship:internship@quickchat.85gmgnb.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const doctors = [
  {
    name: "Dr. Asha Mehra",
    specialization: "General Physician",
    experience: 12,
    gender: "Female",
    location: "Delhi",
    rating: 4.6,
    consultationFee: 500,
    language: "Hindi",
    facility: "Apollo Hospital",
    modeOfConsult: "In-person",
    qualification: "MBBS, MD",
    profilePic: "http://localhost:5000/images/femaledoc1.png"
  },
  {
    name: "Dr. Ravi Kumar",
    specialization: "Internal Medicine",
    experience: 15,
    gender: "Male",
    location: "Hyderabad",
    rating: 4.8,
    consultationFee: 600,
    language: "Telugu",
    facility: "Apollo Clinic",
    modeOfConsult: "Video",
    qualification: "MBBS, MD (Internal Medicine)",
    profilePic: "http://localhost:5000/images/maledoc1.png"
  },
  {
    name: "Dr. Sneha Reddy",
    specialization: "General Physician",
    experience: 10,
    gender: "Female",
    location: "Bangalore",
    rating: 4.5,
    consultationFee: 450,
    language: "English",
    facility: "Apollo Health City",
    modeOfConsult: "Chat",
    qualification: "MBBS",
    profilePic: "http://localhost:5000/images/femaledoc2.png"
  },
  {
    name: "Dr. Arjun Singh",
    specialization: "Internal Medicine",
    experience: 18,
    gender: "Male",
    location: "Mumbai",
    rating: 4.9,
    consultationFee: 700,
    language: "Hindi",
    facility: "Apollo Hospital",
    modeOfConsult: "In-person",
    qualification: "MBBS, MD",
    profilePic: "http://localhost:5000/images/maledoc2.png"
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "General Physician",
    experience: 7,
    gender: "Female",
    location: "Delhi",
    rating: 4.3,
    consultationFee: 400,
    language: "English",
    facility: "Apollo Health Center",
    modeOfConsult: "Video",
    qualification: "MBBS",
    profilePic: "http://localhost:5000/images/femaledoc3.png"
  },
  {
    name: "Dr. Nikhil Jain",
    specialization: "Internal Medicine",
    experience: 11,
    gender: "Male",
    location: "Chennai",
    rating: 4.7,
    consultationFee: 550,
    language: "Telugu",
    facility: "Apollo Clinic",
    modeOfConsult: "In-person",
    qualification: "MBBS, MD",
    profilePic: "http://localhost:5000/images/maledoc3.png"
  },
  {
    name: "Dr. Kavya Patel",
    specialization: "General Physician",
    experience: 9,
    gender: "Female",
    location: "Hyderabad",
    rating: 4.4,
    consultationFee: 480,
    language: "Telugu",
    facility: "Apollo Health Center",
    modeOfConsult: "Chat",
    qualification: "MBBS, MD",
    profilePic: "http://localhost:5000/images/femaledoc4.png"
  },
  {
    name: "Dr. Manish Rawat",
    specialization: "Internal Medicine",
    experience: 16,
    gender: "Male",
    location: "Delhi",
    rating: 4.6,
    consultationFee: 650,
    language: "Hindi",
    facility: "Apollo Hospital",
    modeOfConsult: "Video",
    qualification: "MBBS, MD (Internal Medicine)",
    profilePic: "http://localhost:5000/images/maledoc4.png"
  },
  {
    name: "Dr. Anjali Verma",
    specialization: "General Physician",
    experience: 13,
    gender: "Female",
    location: "Bangalore",
    rating: 4.7,
    consultationFee: 520,
    language: "English",
    facility: "Apollo Clinic",
    modeOfConsult: "In-person",
    qualification: "MBBS",
    profilePic: "http://localhost:5000/images/femaledoc5.png"
  },
  {
    name: "Dr. Rajesh Nair",
    specialization: "Internal Medicine",
    experience: 20,
    gender: "Male",
    location: "Chennai",
    rating: 4.9,
    consultationFee: 750,
    language: "Telugu",
    facility: "Apollo Hospital",
    modeOfConsult: "Chat",
    qualification: "MBBS, MD",
    profilePic: "http://localhost:5000/images/maledoc5.png"
  }
];

(async () => {
  try {
    await Doctor.insertMany(doctors);
    console.log("✅ Doctors seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding doctors:", error);
  }
})();
