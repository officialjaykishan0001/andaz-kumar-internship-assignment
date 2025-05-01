const Doctor = require('../models/doctor.model');

exports.addDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json({ message: 'Doctor added successfully' });

    } catch (err) {
        res.status(500).json({ error: 'Failed to add doctor' });
    }
}

exports.doctorListing = async (req, res) => {
    try {
        const { page = 1, limit = 10, location, gender, specialization } = req.query;

        // Build filter object
        let filter = {};
        if (location) filter.location = location.toLowerCase();
        if (gender) filter.gender = gender.toLowerCase();
        if (specialization) filter.specialization = specialization;

        console.log(filter)
        const doctors = await Doctor.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Doctor.countDocuments(filter);

        res.json({
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / limit),
            doctors
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
}