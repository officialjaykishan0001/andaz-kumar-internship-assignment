const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const cloudinary = require('./utils/cloudinary');
const Doctor = require('./models/doctor.model');

mongoose.connect('mongodb+srv://user_internship_assignments_pass_internship:internship@quickchat.85gmgnb.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const imageMap = {
    "femaledoc1.png": "Dr. Asha Mehra",
    "maledoc1.png": "Dr. Ravi Kumar",
    "femaledoc2.png": "Dr. Sneha Reddy",
    "maledoc2.png": "Dr. Arjun Singh",
    "femaledoc3.png": "Dr. Priya Sharma",
    "maledoc3.png": "Dr. Nikhil Jain",
    "femaledoc4.png": "Dr. Kavya Patel",
    "maledoc4.png": "Dr. Manish Rawat",
    "femaledoc5.png": "Dr. Anjali Verma",
    "maledoc5.png": "Dr. Rajesh Nair"
};

// list of doctor data matching image file names
const doctorData = {
    "femaledoc1.png": {
        "name": "Dr. Asha Mehra",
        "specialization": "General Physician",
        "experience": 12,
        "gender": "Female",
        "location": "Delhi",
        "rating": 4.6,
        "consultationFee": 500,
        "language": "Hindi",
        "facility": "Apollo Hospital",
        "modeOfConsult": "Hospital Visit",
        "qualification": "MBBS, MD"
    },
    "maledoc1.png": {
        "name": "Dr. Ravi Kumar",
        "specialization": "Internal Medicine",
        "experience": 15,
        "gender": "Male",
        "location": "Hyderabad",
        "rating": 4.8,
        "consultationFee": 600,
        "language": "Telugu",
        "facility": "Apollo Clinic",
        "modeOfConsult": "Online Consult",
        "qualification": "MBBS, MD"
    },
    "femaledoc2.png": {
        "name": "Dr. Sneha Reddy",
        "specialization": "General Physician",
        "experience": 10,
        "gender": "Female",
        "location": "Chennai",
        "rating": 4.5,
        "consultationFee": 550,
        "language": "English",
        "facility": "Apollo Health Center",
        "modeOfConsult": "Hospital Visit",
        "qualification": "MBBS, DNB"
    },
    "maledoc2.png": {
        "name": "Dr. Arjun Singh",
        "specialization": "Internal Medicine",
        "experience": 8,
        "gender": "Male",
        "location": "Mumbai",
        "rating": 4.3,
        "consultationFee": 450,
        "language": "Hindi",
        "facility": "Apollo Hospitals",
        "modeOfConsult": "Online Consult",
        "qualification": "MBBS, MD"
    },
    "femaledoc3.png": {
        "name": "Dr. Priya Sharma",
        "specialization": "General Physician",
        "experience": 9,
        "gender": "Female",
        "location": "Delhi",
        "rating": 4.4,
        "consultationFee": 480,
        "language": "Hindi",
        "facility": "Apollo Wellness",
        "modeOfConsult": "Hospital Visit",
        "qualification": "MBBS, MD"
    },
    "maledoc3.png": {
        "name": "Dr. Nikhil Jain",
        "specialization": "Internal Medicine",
        "experience": 14,
        "gender": "Male",
        "location": "Bangalore",
        "rating": 4.7,
        "consultationFee": 620,
        "language": "English",
        "facility": "Apollo Health",
        "modeOfConsult": "Online Consult",
        "qualification": "MBBS, DNB"
    },
    "femaledoc4.png": {
        "name": "Dr. Kavya Patel",
        "specialization": "General Physician",
        "experience": 11,
        "gender": "Female",
        "location": "Ahmedabad",
        "rating": 4.5,
        "consultationFee": 510,
        "language": "Hindi",
        "facility": "Apollo Clinic",
        "modeOfConsult": "Hospital Visit",
        "qualification": "MBBS, MD"
    },
    "maledoc4.png": {
        "name": "Dr. Manish Rawat",
        "specialization": "Internal Medicine",
        "experience": 7,
        "gender": "Male",
        "location": "Kolkata",
        "rating": 4.2,
        "consultationFee": 430,
        "language": "Hindi",
        "facility": "Apollo Hospital",
        "modeOfConsult": "Online Consult",
        "qualification": "MBBS, MD"
    },
    "femaledoc5.png": {
        "name": "Dr. Anjali Verma",
        "specialization": "General Physician",
        "experience": 6,
        "gender": "Female",
        "location": "Pune",
        "rating": 4.1,
        "consultationFee": 400,
        "language": "Telugu",
        "facility": "Apollo Wellness Center",
        "modeOfConsult": "Hospital Visit",
        "qualification": "MBBS"
    },
    "maledoc5.png": {
        "name": "Dr. Rajesh Nair",
        "specialization": "Internal Medicine",
        "experience": 13,
        "gender": "Male",
        "location": "Thiruvananthapuram",
        "rating": 4.9,
        "consultationFee": 700,
        "language": "English",
        "facility": "Apollo Health Hub",
        "modeOfConsult": "Online Consult",
        "qualification": "MBBS, DNB"
    }
};

async function uploadAndSeed() {
    try {
        for (const [filename, data] of Object.entries(doctorData)) {
            const imagePath = path.join(__dirname, 'images', filename);
            const result = await cloudinary.uploader.upload(imagePath, {
                folder: "apollo-doctors"
            });

            const doctor = new Doctor({
                ...data,
                profilePic: result.secure_url
            });

            await doctor.save();
            console.log(`Uploaded and saved: ${data.name}`);
        }

        console.log("✅ All doctors uploaded and saved.");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error:", error);
        mongoose.connection.close();
    }
}

uploadAndSeed();
