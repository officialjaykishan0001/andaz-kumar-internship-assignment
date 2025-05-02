const express = require('express');
const router = express.Router();
const { addDoctor, doctorListing } = require('../controllers/doctor.controller')
const { singleUpload } = require('../middlewares/multer');


// Add Doctor
router.post('/add-doctor', singleUpload, addDoctor)
router.get('/list-doctor-with-filter', doctorListing)

module.exports = router;
