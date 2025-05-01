const express = require('express');
const router = express.Router();
const { addDoctor, doctorListing } = require('../controllers/doctor.controller')

// Add Doctor
router.post('/add-doctor', addDoctor)
router.get('/list-doctor-with-filter', doctorListing)

module.exports = router;
