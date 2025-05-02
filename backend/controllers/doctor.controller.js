const Doctor = require('../models/doctor.model');
const getDataUri = require('../utils/datauri');
const cloudinary = require('../utils/cloudinary');


exports.addDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);

        const file = req.file;
        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            doctor.profilePic = cloudResponse.secure_url;
        } else {
            // Set default profile image if none uploaded
            doctor.profilePic = "https://images.apollo247.in/doctors/a3d6f89d-8212-4988-bea0-54bf9f6db960-1742362433743.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2";
        }

        await doctor.save();
        res.status(201).json({ message: 'Doctor added successfully' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add doctor' });
    }
};

exports.doctorListing = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            location,
            gender,
            specialization,
            feeRange,
            language,
            facility,
            modeOfConsult,
            experienceRange
        } = req.query;

        let filter = {};

        if (location) filter.location = location;
        if (gender) filter.gender = gender;
        if (specialization) filter.specialization = specialization;
        if (language) filter.language = language;
        if (modeOfConsult) filter.modeOfConsult = modeOfConsult;

        // Facility filter
        if (facility) {
            if (facility === "Apollo Hospital") {
                filter.facility = "Apollo Hospital";
            } else if (facility === "Other Clinics") {
                filter.facility = { $ne: "Apollo Hospital" };
            }
        }

        // Fee range filter
        if (feeRange) {
            if (feeRange === "100-500") {
                filter.consultationFee = { $gte: 100, $lte: 500 };
            } else if (feeRange === "500-1000") {
                filter.consultationFee = { $gt: 500, $lte: 1000 };
            } else if (feeRange === "1000+") {
                filter.consultationFee = { $gt: 1000 };
            }
        }

        // Experience range filter
        if (experienceRange) {
            if (experienceRange === "0-5") {
                filter.experience = { $gte: 0, $lte: 5 };
            } else if (experienceRange === "6-10") {
                filter.experience = { $gte: 6, $lte: 10 };
            } else if (experienceRange === "11-16") {
                filter.experience = { $gte: 11, $lte: 16 };
            }
        }


        const doctors = await Doctor.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Doctor.countDocuments(filter);

        res.json({
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            doctors,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
};
